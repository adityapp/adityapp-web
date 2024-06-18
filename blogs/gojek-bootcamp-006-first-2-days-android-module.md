---
  title: "Gojek Bootcamp 006 - First 2 Days Android Module"
  subtitle: "Hello all, now I wanna share with you what I learn in the first 2 days Android module. Android module as part of the Gojek Engineering Bootcamp. I will separate this article in two-part Day 1 and Day 2."
  date: "April 20, 2020"
---

Hello all, now I wanna share with you what I learn in the first 2 days Android module. Android module as part of the Gojek Engineering Bootcamp. I will separate this article in two-part Day 1 and Day 2.

## Day 1 - Learn about Kotlin

Kotlin is a programming language by the JetBrains team, first announced in 2011. Kotlin officially language for Android Development at Google I/O 2017.

![Android Kotlin - Java](/images/android-meme.jpeg)

### Philosophy Kotlin

The first thing we learn in this part is **Statically Typed**. This means each variable in Kotlin should be defined before they are used.

```kotlin
var output: String = "Hello"
var output = "World"
```

**Concise** and **pragmatic** in Kotlin.

```kotlin
// Create a POJO with getters, setters, equals(), hashCode(), toString() and copy() in a single line:
data class Customer(val name: String, val email: String, val company: String)

// Or filter a list using a lambda expression:
val positiveNumbers = list.filter { it > 0 }

// Want a singleton? Create an object: 
object ThisIsASingleton {
  val companyName: String = "Bootcamp"
}
```

Kotlin has **nullable types** so that Kotlin can avoid NullPointerExceptions. Everything in Kotlin is an object, so Kotlin can adapt the functional concept. Kotlin has Object-Oriented Programming, it makes Kotlin can implement OO principal like **Inheritance**, **Polymorphism**, **Abstraction**, and **Encapsulation**.

### Class And Data Class

Kotlin has **Class** and **Data Class**, so what's the difference? Data Class has `copy()` method, so you can copy the object and change each of its properties.

```kotlin
val jack = User(name = "Jack", age = 1)
val olderJack = jack.copy(age = 2)
```

Equality in Data Class doesn't care with the memory address, Data Class just compare the value. Therefore the data class is often used as a POJO class that holds on the data for you.

### Accessors

Setter and Getter are optional in Kotlin. Kotlin automatically creates setter and getter if you initialize the properties. But Kotlin also allowed us to customize the accessor for a property. Either make the property to be read-only or run some syntax each you assign the value in your properties.

```kotlin
var setterVisibility: String = "abc"
  private set // read only property

var stringRepresentation: String
  get() = this.toString()
  set(value) {
    setDataFromString(value) // parses the string and assigns value
  }
```

## Day 2 - Introduction to Android Development

On the second day, coaches introduce to us Android Studio. Basically Android Studio is IDE to developing Android applications. First session coaches presentation about interface and tool in android studio, and the second session they presentation about Android architecture. Android uses **Gradle**, an advanced build toolkit, to automate and manage the build process. Gradle allows you to customize build configuration. In the android project, we have three Gradle files: `setting.gradle` as the **Gradle setting file** to tells which modules should be included when building the app, and two `build.gradle` as **Top-level build file** and **Module-level build file**. After that, we learn about Android life-cycle and basic view of Android. In the last session, we do a cycle to try to make a simple Android application. We should try to make Simple Login Apps using *TextView*, *ImageView*, *Button*, and *EditText*.

![Android Simple Login Apps](/images/android-sample-project.jpeg)
