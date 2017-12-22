---
layout: post
title: Swift Concurrent Array Performance
---
In an attempt to make some speed improvements for a longer-running process, I had the thought of parallelizing some work that was being done over an array. I was hoping to implement something similar to OpenMP's `#pragma omp parallel` or `#pragma omp for`:
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
        if i == numThreads - 1 {  // 3
            // have the last thread finish it off in case our array is an odd size
            end = array.count - 1
        } else {
            end = (i + 1) * batchSize  // 4
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
3. Here we're doing a little bookkeeping to make sure we're not stepping on other threads' toes and that the whole array gets looked at. Continuing our example, for the first thread our starting index is `i * batchSize` = `0` and will go up to `(i + 1) * batchSize` = `22`. The next thread will start at `22` and so on. The last thread