---
layout: post
title: Swift Concurrent Array Performance
subtitle: Concurrently performing operations over an array in Swift doesn't seem to make things faster.
---
In an attempt to make some speed improvements for a longer-running iOS process, I had the thought of parallelizing some work that was being done over an array. I was hoping to implement something similar to OpenMP's `#pragma omp parallel` or `#pragma omp for` for C++:
```c++
#pragma omp parallel for  

for (int i = 0; i < num; i++) {
    // do stuff multithreaded-ly

}
```

Swift has a `DispatchQueue.concurrentPerform(iterations: Int, execute: (Int) -> Void)` which looked like it would work well. While not handling the threads directly, we get a nice indication of which iteration we are on and so we can code appropriately.

As an example, we'll look at getting the max value from an array concurrently, and compare its performance to a serial version and one that uses `Array.max()`. 

Let's start by writing the function that each thread will perform. It will receive an array by reference, as well as where it should start looking and where it should end. This will also be the function we use for the serial version, but we will just call it directly through a helper function.

```swift
// helper function
public func getMax<T: Comparable>(_ array: inout [T]) -> T {
    return getMax(0, array.count - 1, &array)
}

public func getMax<T: Comparable>(_ start: Int, _ end: Int, _ array: inout [T]) -> T {
    var best = array[start]
    for i in start..<end {
        if array[i] > best {
            best = array[i]
        }
    }
    return best
}
```
<br>
Pretty straightforward: return the max in a given section. Now let's look at how to throw multiple threads at it.
```swift
public func concurrentMax<T: Comparable>(_ array: inout [T], numThreads: Int = 5) -> T? {
    var best = [T?](repeating: nil, count: numThreads)  // 1
    let size = array.count
    DispatchQueue.concurrentPerform(iterations: numThreads, execute: { (i) in
        // divide up the work
        let batchSize = size / numThreads  // 2
        
        let start = i * batchSize
        let end: Int
        if i == numThreads - 1 {  // 4
            // have the last thread finish it off in case our array is an odd size
            end = array.count - 1
        } else {
            end = (i + 1) * batchSize  // 3
        }
        
        // do our part
        let batchBest = getMax(start, end, &array) as T!
        best[i] = batchBest  // 5
    })
    return best.flatMap { $0 }.max()!  // 6
}
```
1. First, we make an array for each thread's results. When threads return they will store their answer in this array. Let's assume the array is size 111 and we have 5 threads.
2. Inside our `concurrentPerform` call, we figure out the amount of work each thread will do: for our example of 5 threads, our batchSize = `size / numThreads` = `111 / 5` = `22`.
3. Here we're doing a little bookkeeping to make sure we're not stepping on other threads' toes and that the whole array gets looked at. Continuing our example, for the first thread our starting index is `i * batchSize` = `0` and will go up to `(i + 1) * batchSize` = `22`. The next thread will start at `22` and so on. The last thread...
4. ...will take whatever is left.
5. Set the best from that secton.
6. Return the overall best by comparing the best from each section.  

<br>
In order to compare the performance of a parallel implementation vs. a serial one and Swift's build-in `Array.max()` function, we'll use a timing function that comes from [this StackOverflow post](https://stackoverflow.com/a/24755958/5469464): 
```swift
public func timeFunction(_ block: () -> ()) -> Double {
    let start = DispatchTime.now()
    block()
    let end = DispatchTime.now()
    let diff = end.uptimeNanoseconds - start.uptimeNanoseconds
    let interval = Double(diff) / 1_000_000_000
    return interval
}
```
<br>
[In order to improve the performance of the playground](http://ericasadun.com/2015/03/16/swift-vroom-vroom-fast-playgrounds/) we will run this in, I put all of the preceding code (as well as a helper function to generate an array of random numbers) into the playground's Sources folder.

<br>
The actual timing goes in the playground file:
```swift
import Foundation

let maxExp = 7
for i in (1...maxExp) {
    let size = Int(truncating: NSDecimalNumber(decimal: pow(10, i))) * 5 + 4
    var concurrent: Double = 0
    var serial: Double = 0
    var std: Double = 0
    let iterations = 3
    for _ in (1...iterations) {
        var randArray = randomArray(size: size)
        concurrent += timeFunction {
            let _ = concurrentMax(&randArray)
        }
        serial += timeFunction {
            let _ = getMax(&randArray)
        }
        std += timeFunction {
            let _ = randArray.max()!
        }
    }
    let iter = Double(iterations)
    print("Concurrent #\(i) - \(size):\t\(concurrent / iter)")
    print("Serial #\(i) -     \(size):\t\(serial / iter)")
    print("std #\(i) -        \(size):\t\(std / iter)")
}
```

Note that the runtime will be a lot longer if you do not separate out some functions into the `Sources` folder of your playground.

<br>
My hypothesis was that the concurrent implementation would be the fastest, followed by `Array.max()` and my serial version. The data proved me wrong, though:  

![Swift Concurrent Array Performance Comparison](/assets/images/swift-concurrent-array.png)

The concurrent implementation was not faster than the built-in function and was in fact slower on most occassions, though they are pretty close. The bigger surprise to me, though, was that finding the max serially was consistently twice as fast as the built-in or concurrent version. 
<br>

This result mirrored what I had come to find about on-device performance, which was that concurrently working over an array really didn't help that much. It seems as though the overhead of managing threads or multiple function calls takes too much to make this work faster. 
<br>

If I made a mistake (which isn't unlikely) or you have had different experiences with concurrency, let me know your thoughts!