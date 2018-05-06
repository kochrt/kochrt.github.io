---
layout: post
title: Exception Coalescing Operator
excerpt: ???
---
Code first:
```swift
infix operator ???
func ???<T>(_ f: @autoclosure () throws -> T, _ backup: T?) -> T? {
    do {
        return try f()
    } catch {
        return backup
    }
}
```
<br>
When writing some `Decodable` classes I came into some instances where I was being more verbose than I wanted.

```swift
class Item: Decodable {
    
    var id: Int
    var name: String

    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        do {
            self.id = try container.decode(Int.self, forKey: .id)
        } catch {
            self.id = 0
        }
        do {
            self.name = try container.decode(String.self, forKey: .name)
        } catch {
            self.name = ""
        }
    }
}
```
<br>
I've come into similar situations before, where I want to set the value of something from a function that `throws` but I have a backup value. But it's a bunch of `do catch`ing and I don't like wasting keystrokes. 

So, I created an infix operator `???` that takes two arguments,
- `f`: A throwing function that returns a type `T`
- `backup`: Value also of type `T`

that will try `f`, and if it fails, return `backup`.

```swift
infix operator ???
func ???<T>(_ f: @autoclosure () throws -> T, _ backup: T?) -> T? {
    do {
        return try f()
    } catch {
        return backup
    }
}
```
<br>

This allows our previous `init` code to look like this:
```swift
class Item: Decodable {
    
    var id: Int
    var name: String

    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.id = try container.decode(Int.self, forKey: .id) ??? 0
        self.name = try container.decode(String.self, forKey: .name) ??? ""
    }
}
```
<br>

Much better!