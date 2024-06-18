---
  title: "Gojek Bootcamp 006 - Android Module Day 3"
  subtitle: "Ok, now I wanna share with you about my story in Android Module Day 3. Today we learn about RecyclerView, MVP (Model View Presenter) and Testing Pyramid & Test Doubles."
  date: "April 21, 2020"
---

Ok, now I wanna share with you about my story in Android Module Day 3. Today we learn about RecyclerView, MVP (Model View Presenter) and Testing Pyramid & Test Doubles.

## RecyclerView

After we learn about **ListView**, in the first session, we learn about **RecyclerView**, so what the difference between ListView and RecyclerView? RecyclerView is very similar to **UITableView** in iOS, RecyclerView has reusable of a component to fill with other data. RecyclerView can reduce memory usage, so that make your application to be lighter and cheaper for memories.

![Android RecyclerView](/images/android-recyclerview.jpeg)

To make RecyclerView, at least we have 3 component:
- **Data**, it's the item list.
- **Adapter** to manage our data to the list.
- **RecyclerView** component in our Activity, to show the list.

![Android RecyclerView Flow](/images/android-recyclerview-flow.jpeg)

## MVP (Model View Presenter)

Ok, in the second session, we learn about **MVP** or **Model View Presenter**, MVP is one of a design pattern that you can implement in Android Development. View and Presenter can communicate base on contract, and usually, to creating the contract we use interface or protocol. Presenter bridging between Model And View, so the view doesn't know about the model, view just receive with what presenter has given. So basically MVP separating the business logic from view.

![Android Model View Presenter](/images/android-mvp.jpeg)

## Test Pyramid & Test Doubles

And the last session is we learn about Test Pyramid. Test Pyramid has 3 layers, Small tests, Medium tests, and Large tests. Small tests are unit tests that validate the behavior of our app in each class. Medium tests are integration tests that validate the interaction between each module in our app. And the last layer in Test Pyramid is Large tests, large tests are end-to-end tests that validate your application flow from start to finish.

![Android Test Pyramid](/images/android-test-pyramid.jpeg)

After we discussion about Test Pyramid, we discussion about Test Doubles. Test Doubles consists of:
- Fake
- Mock
- Stub
- Dummy
- Spy

Above is my story about what I learn in Android Module Day 3. I hope that can give you a picture of what we do in Gojek Bootcamp 006, especially in the Android Module 😄. See you in the next blogpost. Cheers~~~ 🍻
