# What is a Microservice?

Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

Independently deployable
Loosely coupled
Organized around business capabilities
Owned by a small team
Highly maintainable and testable

The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

# What is Monolith architecture?

Monolithic Architecture is like a big container, wherein all the software components of an app are assembled and tightly coupled, i.e., each component fully depends on each other.
https://www.geeksforgeeks.org/monolithic-architecture/

# What is the difference between Monolith and Microservice?

https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith

# Why do we need a useEffect Hook?

What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

Why is useEffect called inside a component? Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

# What is Optional Chaining?

Optional chaining: (?.)

The optional chaining operator (?.) enables you to
read the value of a property located deep within a
chain of connected objects without having to
check that each reference in the chain is valid.

The ?. operator is like the . chaining operator,
except that instead of causing an error if a reference
is nullish (null or undefined), the expression returns
a value of undefined.

When used with function calls,
it returns undefined if the given function does not exist.

Example:

const adventurer = {
name: 'Alice',
cat: {
name: 'Dinah'
}
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// output: undefined

console.log(adventurer.someNonExistentMethod?.());
// output: undefined

# What is Shimmer UI?

What is a shimmer effect? Shimmer effects are loading indicators used when fetching data from a data source that can either be local or remote. It paints a view that may be similar to the actual data to be rendered on the screen when the data is available

# What is the difference between JS expression and JS statement

Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments.
https://www.joshwcomeau.com/javascript/statements-vs-expressions/

# What is Conditional Rendering, explain with a code example

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
https://reactjs.org/docs/conditional-rendering.html#:~:text=Conditional%20rendering%20in%20React%20works,the%20UI%20to%20match%20them.&text=This%20example%20renders%20a%20different,the%20value%20of%20isLoggedIn%20prop.

# What is CORS?

Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
https://portswigger.net/web-security/cors

# What is async and await?

https://javascript.info/async-await
The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function. This is required to use await inside any function. When a function is declared with async, it automatically returns a promise; returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.
await is pretty simple: it tells JavaScript to wait for an asynchronous action to finish before continuing the function. It’s like a ‘pause until done’ keyword. The await keyword is used to get a value from a function where you would normally use .then(). Instead of calling .then() after the asynchronous function, you would simply assign a variable to the result using await. Then you can use the result in your code as you would in your synchronous code.
https://www.theodinproject.com/lessons/node-path-javascript-async-and-await

# What is the use of = await data.json()fl in getRestaurants()

response.json() is a method on the Response object that lets you extract a JSON object from the response. The method returns a promise, so you have to wait for the JSON: await response.json().

https://dmitripavlutin.com/javascript-fetch-async-await/
