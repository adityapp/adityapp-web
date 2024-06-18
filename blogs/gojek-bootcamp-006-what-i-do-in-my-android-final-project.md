---
  title: "Gojek Bootcamp 006 - What I do in my Android Final Project?"
  subtitle: "Hello there, finally I was finished my Android Module in Gojek Bootcamp 006. Before we finished this module, we got the final project, which is we should develop Todo List Apps."
  date: "March 25, 2020"
---

Hello there, finally I was finished my Android Module in Gojek Bootcamp 006. Before we finished this module, we got the final project, which is we should develop Todo List Apps. So we should create Todo List with our version, we can implement anything that we want, but with acceptance criteria that have been specified. And now, I will share with you about my Todo List Apps, I will breakdown what I implemented in my project one by one. Let's do that!

## About My To-Do Application

To-Do list Application basically is an application to make a daily plan. In this project, we got basic mockups from coaches, but we free to improve and implement what we learn.

![My To-Do list Application](/images/android-final-app.gif)

### Use case

Add new task
Show the exists task
Delete task
Edit task
Add an image for the task
Search the exists task
Show current weather

## Project Architecture

In this part, I implement [Clean Architecture](https://proandroiddev.com/kotlin-clean-architecture-1ad42fcd97fa) to construct my project structure. This is one of my favorite stuff that I learn in this module. Why I choose this architecture? I think because Clean Architecture makes the project to be scalable and easy to read. This architecture also implements SRP ([Single Responsibility Principle](https://hackernoon.com/you-dont-understand-the-single-responsibility-principle-abfdd005b137)) that makes a class only has one responsibility.

![Android Project Architecture](/images/android-project-architecture.jpeg)

Above is a picture of the Clean Architecture concept. Basically Clean Architecture has a five-layer that separates class base on responsibility, so making it easier for further modification. And now let's see how I implement that in my project.

![Android Project](/images/android-project.jpeg)

This is my directory in my project, I follow the Clean Architecture concept, so I have five directories which consist of `data`, `domain`, `external`, and `presentation`. Inside the data directory, I also have three more directory `model`, `repository`, and `service`. In the domain directory I have `usecase`, which is inside this directory, I create a class that represents the use case that I need. And then I create a `external` directory to contain my helper class and my extension. And the last directory is `presentation`, this directory contains the UI logic.

## Design Pattern

To make my project be cleaner, I combine the Clean Architecture with MVP ([Model View Presenter](https://medium.com/@cervonefrancesco/model-view-presenter-android-guidelines-94970b430ddf)) for Design Pattern. It's separate business logic from View. The View doesn't know about Model so that the Presenter be a bridge between View and Model.

![Android Presenter Directory](/images/android-presentation.jpeg)

In this project, I make Activity as View and add one more class as Presenter, And then I make a contract for communicating between View and Presenter, so View and Presenter only communicate base on contract.

## The library Makes Life Be Easier
In the class, we learn about network calls and how to load an image in android. But I think that should implement a lot of code. For the instance, if you want to implement a network call to request some data from API, you should implement that in the background thread, after that if you want to show the data, you should move the data from background to the main thread. It needs more effort just only to make a request. So to support my To-Do list application to be easier to develop, I use some libraries like [Retrofit](https://square.github.io/retrofit/), [Picasso](https://square.github.io/picasso/), and [Swipe-Reveal-Layout](https://github.com/chthai64/SwipeRevealLayout). Retrofit make your implementation be easier because you just only define interface and annotations to make a network call. Retrofit automate handle the thread, so you don't need more effort to handle that. For example, I create a simple request to Open Weather API.

```kotlin
interface WeatherService {
    @GET("weather")
    fun getWeather(
        @Query("q") cityName: String,
        @Query("appid") apiKey: String
    ): Call<WeatherModel>
}
```

And to define the Retrofit.

```kotlin
val weatherService = Retrofit.Builder()
    .baseUrl(WEATHER_BASE_URL)
    .addConverterFactory(GsonConverterFactory.create())
    .build()
    .create(WeatherService::class.java)
```

See, it's very simple, right?

And also I use Picasso to showing my image either from path or URL to my ImageView. To implement Picasso in your program, you just add simple code like this.

```kotlin
Picasso.get().load(File(data.image)).into(itemView.ivImageTodo)
```

And to provide a better user experience, I implement Swipe-Reveal-Layout to make my card can be swiped.

![Android Swipe-Reveal-Layout](/images/android-swipe-reveal-layout.jpeg)

## Test My Apps

The last part that I want to share with you is about how I test my application. In the class, we were given an overview of the Pyramid Test. In my project, I also implement a Unit Test and UI Test. To implement a Unit Test in my project I use JUnit and to mock my class, I use Mockito to make it easier. And to do UI Tests, I use Espresso to test my view. But I have a problem when I do test the RecyclerView. I stuck in how to test view inside the RecyclerView because RecyclerView has multiple items. I start my adventure to find how to solve that problem in Google. And again, I get my solution in StackOverflow, and I will share with you how to solve that problem. To solve that problem you can use this code.

```kotlin
onView(withId(R.id.rvTodoList))
    .perform(
        RecyclerViewActions.actionOnItemAtPosition<RecyclerView.ViewHolder>(
            0,
            swipeLeft()
        )
    )
```

I really get a lot of new experience in this module, especially make our code to be cleaner, because in this module coaches always give us a suggestion to make our code be better. Thanks a lot to all the coaches for teaching me, cheers 🍻.
