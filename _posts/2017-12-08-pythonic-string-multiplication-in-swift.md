---
layout: post
title: Pythonic String Multiplication in Swift
---

Unfortunately the following code does not compile in Swift:
<br>
```swift
let dash = "-" * 10  
// Error: Binary operator '*' cannot be applied to 
// operands of type 'String' and 'Int'
```

though this works in python:
```python
dash = "-" * 10  # "----------"
```
<br>
Being sufficiently lazy, I decided to solve this problem and implement a similar infix operator for myself in Swift. An intial solution might look something like either of these:
```swift
infix operator *>: MultiplicationPrecedence

func *>(_ str: String, _ count: Int) -> String {
    return (1...count)
        .map({ _ in str })
        .reduce("", { $0 + $1 })
}   
```

```swift
infix operator *>: MultiplicationPrecedence

func *>(_ str: String, _ count: Int) -> String {
    var result = ""
    for i in (1...count) {
        result += str
    }
    return result
}   
```
Both of these work, with the second, explicit loop being more efficient as its `O(n)` as opposed to the functional version's `O(2n)`.
  
<br>
We can do better though. With a bit of recursion and simple math we get:
```swift
infix operator *>: MultiplicationPrecedence

func *>(_ str: String, _ count: Int) -> String {
    guard count >= 0 else { fatalError("Can't have a negative number") }
    if count < 2 {
        return count == 1 ? str : ""
    }
    if count % 2 == 0 {
        return (str + str) *> (count / 2)
    }
    return str + (str *> (count - 1))
}

let str = "7" *> 3 + "3" *> 7  // "7773333333"
```

By recognizing that `"-" * 4` is the same `"--" * 2`, we can essentially cut the problem in half when we can, giving us an `O(nlog(n))` implementation.