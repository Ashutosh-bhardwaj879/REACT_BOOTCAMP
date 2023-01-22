# What are various ways to add images into our App? Explain with code examples
There are several ways to import and use images in a React application. Some common methods include:

Using the import statement: You can import an image file directly into your component using the import statement, and then reference it in your JSX code. For example:
Copy code
import myImage from './my-image.jpg';

function MyComponent() {
  return <img src={myImage} alt="My Image" />;
}

Using a require statement: Instead of import, you can also use a require statement to include an image file in your component. For example:
Copy code
const myImage = require('./my-image.jpg');

function MyComponent() {
  return <img src={myImage} alt="My Image" />;
}

Using a <img> tag with a src attribute: You can also include an image in your component by using an <img> tag with a src attribute that points to the image file. For example:
Copy code
function MyComponent() {
  return <img src="./my-image.jpg" alt="My Image" />;
}

Using the url() function of CSS: You can use the url() function of CSS to reference an image file in a stylesheet, and then apply the styles to your component.
Copy code
import './MyComponent.css';

function MyComponent() {
  return <div className="my-image" />;
}
Copy code
.my-image {
    background-image: url('./my-image.jpg');
}

Using webpack file-loader : You can use webpack's file-loader to import image files and use them in your component.
Copy code
import myImage from './my-image.jpg';

function MyComponent() {
  return <img src={myImage} alt="My Image" />;
}
https://betterprogramming.pub/how-to-display-images-in-react-dfe22a66d5e7

# What would happen if we do console.log(useState())?
console.log(useState()) It will have 2 values like this (2) [undefined, ƒ]
console.log(useState("Default value here")) It will have 2 values like this (2) ["Default value here", ƒ]

# How will useEffect behave if we don't add a dependency array ?
If we don't add a dependency array to useEffect Hook, then it will follow its default behaiviour. It will call the callBack fn passed to it on each render. Everytime something changes (either props or state) re-render of the component happens and useEffect will call the callBack fn.

If I dont give the second parameter(the dependency array). Means it is not dependent on anything and default behavior of useEffect is to be called after render. So It will be called on each re-render.
if we give empty dependency array []. It will be called only once
if we give [someVariable], then callback fn will be called only when 'someVariable' has some changes.

useEffect is a Hook that allows you to synchronize a component with an external system or perform some side-effects, such as fetching data or updating the DOM. It takes two arguments: a callback function that contains the side-effect code, and an optional dependency array.

If you don't pass a dependency array to useEffect, it will assume that all the variables used inside the callback function are dependencies and it will run the effect on every render. This can cause unnecessary re-renders and performance issues, as well as unexpected behavior.

For example, if you have a component that fetches data from an API in an useEffect hook without passing a dependency array, it will fetch the data on every render, even if the component props or state haven't changed. This can lead to multiple unnecessary network requests and slow down the performance of the application.

Here's an example of how useEffect would behave if you don't pass a dependency array:


function MyComponent({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://my-api.com/data/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  });

  return <div>{data}</div>;
}
In this example, the component fetches data from an API every time the component is rendered, even if the id prop hasn't changed. This would cause unnecessary network requests and slow down the performance.

It's important to pass a dependency array to useEffect to let React know which variables your effect depends on. React will only re-run the effect if one of the dependencies has changed.

In the above example, you can pass id as a dependency to the useEffect hook, like this:


useEffect(() => {
    fetch(`https://my-api.com/data/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);

This way, the effect will only run when the id prop changes, avoiding unnecessary network requests and improving performance.

# What is SPA?
SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from a server.

In a traditional multi-page application, when a user clicks on a link or submits a form, the browser sends a request to the server, which then renders and sends back a new HTML page. In contrast, a SPA dynamically updates the content of the current page, without making a full page reload, by communicating with the server through APIs.

This allows for a more seamless and responsive user experience, as the user can interact with the application without waiting for new pages to load. However, as all the logic of the application runs on the client-side, it can increase the complexity of the codebase and the load on the browser.

SPAs are often built using JavaScript libraries and frameworks such as Angular, React, and Vue.js. These libraries and frameworks provide a structure and set of tools for building client-side applications that can dynamically update content, handle routing, and manage state.

Some examples of popular SPA are Spotify, Trello, and Google Maps.

# What is difference between Client Side Routing and Server Side Routing?
Client-side routing and server-side routing are two different methods of handling navigation in a web application.

Client-side routing: In client-side routing, the routing is handled by JavaScript on the client-side, usually with the help of a JavaScript library or framework. When the user clicks on a link or submits a form, the browser's URL changes, but the page does not refresh. Instead, JavaScript intercepts the browser's navigation event, and updates the content of the page dynamically based on the new URL. This allows for a more seamless and responsive user experience, as the user can interact with the application without waiting for new pages to load. However, it also increases the complexity of the codebase and the load on the browser.

Server-side routing: In server-side routing, the routing is handled by the server. When the user clicks on a link or submits a form, the browser sends a request to the server, which then renders and sends back a new HTML page based on the URL. This method can be simpler to implement, as the server does the heavy lifting of rendering pages. However, it can also lead to slower performance, as the user must wait for a new page to load.

It's worth noting that you can use a combination of both client-side routing and server-side routing. With client-side routing, you can handle navigation on the client-side, while still rendering the initial page on the server-side. This way you can have the benefits of both methods: providing a fast navigation experience and allowing search engine to crawl your site.

In summary, client-side routing is useful when you want to create a seamless and responsive user experience, but it can also increase the complexity of the codebase and the load on the browser. Server-side routing can be simpler to implement, but it can also lead to slower performance.