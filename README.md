Simple React Redux App

As the repository name says, it's a simpes app to use redux and react

### Flux

"Flux is the application architecture that Facebook uses for building client-side web applications." (Facebook)

Flux is an architecture to build client-side applications, where the 4 largest parts are:

- **Store**: Stores contain the application state and logic

- **Dispatch**: The central hub that manages all data flow in a Flux application

- **Actions**: Methods for trigger a dispatch to the stores, including payload of data

- **View**: Can be a React Component, or others.

Photo for example:
![image](https://user-images.githubusercontent.com/31391753/54871595-6d41b780-4d95-11e9-87b6-fd61f95b88c7.png)

---

### And in this application, who is who?

In this application, we use Redux, which implements the flux architecture.

Here you can compare Flux and Redux, and their nominations
![image](https://user-images.githubusercontent.com/31391753/54871696-4dab8e80-4d97-11e9-913a-fca07efc6b61.png)

In the app:

### **State**:

![image](https://user-images.githubusercontent.com/31391753/54871719-de826a00-4d97-11e9-8a88-5958b7dbb706.png)

- Store = State
- Reducer = todos

### **Action**:

![image](https://user-images.githubusercontent.com/31391753/54871756-4769e200-4d98-11e9-8c93-9fdcf2cfc3bc.png)

- Type = Type of the action
- Payload = Data from action to reducer

---

#### Conclusion

Using the flux architecture helps a lot, mainly the part of accessing the state of the application as a whole, not only of separate components, using actions to make changes in the state, and React also, which facilitates the development of web applications.

Any doubts, make an issue, and feel free to make pull requests, thanks for the attention. :grin:
