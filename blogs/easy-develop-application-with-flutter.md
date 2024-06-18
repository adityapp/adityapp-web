---
  title: "Easy Develop Application With Flutter"
  subtitle: "Google introduces Flutter on Google I/O 17 - Solution for creating an application with beautiful UI also has many variants widget for easy to use."
  date: "March 9, 2020"
---

![Flutter](/images/flutter-logo.jpg)

> Flutter is open-source focusing in UI SDK create by Google, crafting beautiful and fast user interface for mobile, web, and desktop with single codebase.

Google introduces Flutter on Google I/O 17 - Solution for creating an application with beautiful UI also has many variants widget for easy to use. Write code with Dart language, Dart language is a programming language by Google. If you using Java before, it's will be easier for you to learn Dart.

## Features

Flutter has a lot of features that make you easier and faster to develop the user interface.

### Hot Reload

Hot reload feature allowing you to easier to see the result after changes your code. Hot reload works by injecting updated source code files into the running Dart Virtual Machine (VM), so you can quickly view the effects of your changes.

![Flutter Hot Reload](/images/flutter-hot-reload.gif)

### Full Support by Material Design

If we familiar with a component to called something view, in Flutter, we called that with widgets. Flutter has a lot of component views to choose from and easier to implement. That thing has supported by Material Design. We're able to create a custom widget from other widgets.

![Flutter Material Design](/images/flutter-doc.jpeg)

### Editor and IDE Support

Flutter support Visual Studio Code and IntelliJ/Android Studio with many plug-ins can make you easier to develop apps. Provide a lot of packages to speed you develop and accessing native code is easy.

![Code Editor](/images/flutter-sample-code.gif)

## Flutter support by Big Community

![Flutter Repository](/images/flutter-repo.jpeg)

Flutter has a big community, not only in Github, on social media like Facebook and Twitter, Flutter has a lot of fans and contributors. The community can help you to solve your problem or issue, so simultaneously Flutter can expand that features.

Basically, Flutter can work with a shared package created by other developers from the community. So that allows you to create apps without developing everything from scratch.

### Sample Code

```dart
 1 import 'package:flutter/material.dart';
 2 
 3 void main() => runApp(HelloWorldApp());
 4 
 5 class HelloWorldApp extends StatelessWidget {
 6   @override
 7   Widget build(BuildContext context) {
 8     return MaterialApp(
 9       title: 'Hello World App',
10       home: Scaffold(
11         appBar: AppBar(
12           title: Text('App Bar Title here'),
13         ),
14         body: Center(
15           child: Text('Hello World'),
16         ),
17       ),
18     );
19   }
20 }
21
```

Basically, Flutter provides two class for you extends to create class or widget, either StatelessWidget or StatefulWidget. If you need the widget or view provide state, you can use StatefulWidget to handle state in widget or view. If you don't need that, you can use StatelessWidget. The Widget basically is Object, you can set the states in each Widget to manage view as you want.

## Hands-on Experience

Why not using React Native for cross-platform and single codebase? Basically, it's my question in 1 year ago. I'm using React Native in my previous project, but after that, I chose Flutter to develop my project. For the first time, we choose to use Flutter because my client gives us a design that similarity to Material Design, so we think, so easier if we using Flutter because Flutter has had support Material Design.

We discussed to determine which one to choose, and then we don't choose to use React Native because we think that JavaScript has a lot of magic. So we choose Dart because that more type-safe than JavaScript. We know if we can use TypeScript or Flow to support React Native keep it strong type, but to do that, we must add more dependency in the program. That is the simple reason why we choose Flutter rather than React Native to develop our project.

## Resources

- [Flutter Github Repository](https://github.com/flutter/flutter?source=post_page-----9d467d7aa70f--------------------------------)
- [Flutter - Beautiful native apps in record time](https://flutter.dev/?source=post_page-----9d467d7aa70f--------------------------------)
- [Flutter Wikipedia](https://en.wikipedia.org/wiki/Flutter_%28software%29?source=post_page-----9d467d7aa70f--------------------------------)
- [Flutter  -  5 reasons why you may love it](https://medium.com/hackernoon/flutter-5-reasons-why-you-may-love-it-55021fdbf1aa)
