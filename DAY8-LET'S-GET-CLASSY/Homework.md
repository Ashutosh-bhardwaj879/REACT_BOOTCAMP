# How do you create Nested Routes react-router-dom configuration
We use to add children to that parent route comoponent.

eg.

{
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
Here Profile component is nested route inside About component.

# Read about createHashRouter, createMemoryRoute from React Router docs.
-> createHashRouter : This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

createMemoryRoute : Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

# ● What is the order of life cycle method calls in Class Based Components
Class based components are executed in two phases : Render phase & commit phase.

Render phase is pure and no side effects. It may be paused, restarted or aborted by React (when child component is created for eg). The constructor(), render() and componentDidMount() happens in this phase.

In constructor, the props are passed to its parents.

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

Mounting :

constructor - The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
Initializing local state by assigning an object to this.state
Binding event handler methods to an instance.
Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

componentDidMount() - componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). You may call setState() immediately in componentDidMount() so that it triggers re-render before the browser updates the screen.
Updating : 3. componentDidUpdate() - componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

Unmounting : 4. componentWillUnmount() -componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

constructor
   render
   componentDidMount
   componentDidUpdate
   componentWillUnmount

# Que. Why do we use componentDidMount?
Ans. The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

-> componentDidMount is used for API Calls.

# ● Why do we use componentWillUnmount ? Show with example
Ans - componentWillUnmount is used to unmount the component, basically it calls when we move to other component/page from current component/ page.

import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    // console.log("Child - Constructor" + this.props.name);
  }

  componentDidMount() {
    // API Calls
    // const data = await fetch("https://api.github.com/users/deepakydv25");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP");
    // }, 1000);
    // console.log("Child - ComponentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    // console.log("Child - ComponentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Child - ComponentWillUnmount");
  }

  render() {
    // console.log("Child - Render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Count: {this.state.userInfo.location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Count Button
        </button>
      </div>
    );
  }
}

export default Profile;

componentWillUnmount is used to cleanup any function/subscriptions that will be running even after the component is unmounted.

For example, in Repo class, during componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realise and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.

# ● (Research) Why do we use super(props) in constructor?

-> In JavaScript, super refers to the parent class constructor(here it points to React.Component implementation). You can't use this in a constructor until after you've called the parent constructor.

Link : https://medium.com/@jbbpatel94/why-do-we-write-super-props-fc367074a2af

super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.

A component that extends React.Component must call the super() constructor in the derived class since it’s required to access this context inside the derived class constructor.

When you try to use props passed on parent to child component in child component using this.props.name, it will still work without super(props). Only super() is also enought for accessing props in render method.

The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

# ● (Research) Why can't we have the callback function of useEffect async ?

-> Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

// ❌ Don't do this!
useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);

  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);

Link : https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook#:~:text=Why%3F,function%20will%20never%20get%20called.

// Warning: Effect callbacks are synchronous to prevent race conditions
useEffect(async () => {
  const products = await fetch(`${API_URL}/products.json`);
  setProducts(products);
}, []);

https://www.designcise.com/web/tutorial/why-cant-react-useeffect-callback-be-async

