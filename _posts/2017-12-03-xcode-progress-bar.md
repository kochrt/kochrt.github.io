---
layout: post
---

## XCode Console Progress Bar
I wanted to monitor the performance of a background process in an XCode app, so I wrote this little progress bar. It displays successive bars in the XCode console, which doesn't allow moving the cursor like a tradtional terminal, so output can't be overwritten.

```swift
class ProgressBar {
    var lineLength = 20
    var lastProgress = 0.0
    var unfilledString = "-"
    var filledString = "+"
    
    func progressUpdated(_ percentComplete: Double) -> String? {
        if percentComplete - lastProgress > (1.0 / Double(lineLength + 1)) {
            lastProgress = percentComplete
            return progressLine(percentComplete)
        }
        return nil
    }
    
    func progressLine(_ progress: Double) -> String {
        let bar = (1..<lineLength + 1).map {
            (Double($0) / Double(lineLength + 1)) < progress ? filledString : unfilledString
            }.reduce("", +)
        return "|" + bar + "|"
    }
}
```

The following code produces the output below it:
```swift
let total = 1000
let p = ProgressBar()
(1...total).forEach {
    let percentComplete = Double($0) / Double(total)
    if let line = p.progressUpdated(percentComplete) {
        print(line)
    }
}
```
```
|+-------------------|
|++------------------|
|+++-----------------|
|++++----------------|
|+++++---------------|
|++++++--------------|
|+++++++-------------|
|++++++++------------|
|+++++++++-----------|
|++++++++++----------|
|+++++++++++---------|
|++++++++++++--------|
|+++++++++++++-------|
|++++++++++++++------|
|+++++++++++++++-----|
|++++++++++++++++----|
|+++++++++++++++++---|
|++++++++++++++++++--|
|+++++++++++++++++++-|
|++++++++++++++++++++|
```

You can also output an arbitrarily complete progress bar:
```swift
p.progressLine(0.68)  // |++++++++++++++------|
```