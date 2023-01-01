--DAY1 NOTES
-------------
*We need to copy paste cdn links for react to
start minimally working with react

*We can use React.createElement("tag",{id:"attribute"},"what to fill");
We can use ReactDOM.createRoot(document.getElemtbyId("root"));
root.render(container);


Q1) What is Emmet?
----------------------------------------------------------------
Ans  - Emmet is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist. The project was started by Vadim Makeev in 2008 and continues to be actively developed by Sergey Chikuyonok and Emmet users

Q2)Difference between Library VS Framework?
----------------------------------------------------------------
Ans -
1)Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
2)A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
3)The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is
https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

Q3) What is CDN ? How it works ?
----------------------------------------------------------------
Ans - A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon

At its core, a CDN is a network of servers linked together with the goal of delivering content as quickly, cheaply, reliably, and securely as possible. In order to improve speed and connectivity, a CDN will place servers at the exchange points between different networks.

These Internet exchange points (IXPs) are the primary locations where different Internet providers connect in order to provide each other access to traffic originating on their different networks. By having a connection to these high speed and highly interconnected locations, a CDN provider is able to reduce costs and transit times in high speed data delivery.
https://www.cloudflare.com/learning/cdn/what-is-a-cdn/


Q4) What is crossorigin in script tag?
----------------------------------------------------------------
Ans - The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

Tip: The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server. This policy enforces that documents that interact with each other must have the same origin (domain).
https://www.w3schools.com/tags/att_script_crossorigin.asp#:~:text=The%20crossorigin%20attribute%20sets%20the,or%20scripts)%20from%20another%20domain.


Q5) What is difference between React and ReactDOM
--------------------------------------------------------
Ans - As the name implies, ReactDOM is the glue between React and the DOM. For everything else, there’s React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

So, in brief:

React: a javascript library, designed for building user interfaces
React-DOM: a complimentary library to React which glues React to the browser DOM

https://stackoverflow.com/questions/34114350/react-vs-reactdom

Q6)What is difference between react.development.js and react.production.js files via CDN?
-------------------------------------------------------------------
Ans-The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack devtool settings.

What specifically separates production from development is dependent on your preferences and requirements, which means it pretty much depends on what you write in your Webpack configuration.
https://stackoverflow.com/questions/48151128/difference-between-production-and-development-build-in-reactjs#:~:text=The%20development%20build%20is%20used,running%20on%20your%20client's%20machine.

Q7)What is async and defer?
---------------------------------------------------------------------------------------------
Ans -Async scripts are executed as soon as the script is loaded, so it doesn't guarantee the order of execution (a script you included at the end may execute before the first script file )

Defer scripts guarantees the order of execution in which they appear in the page.
https://stackoverflow.com/questions/10808109/script-tag-async-defer