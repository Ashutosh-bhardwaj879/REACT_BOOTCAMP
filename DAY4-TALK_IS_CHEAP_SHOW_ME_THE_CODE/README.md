Q1) Is JSX mandatory for React?
ANS - NO
React Without JSX
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript

https://reactjs.org/docs/react-without-jsx.html

Q2) Is ES6 mandatory for React?
ANS - NO
https://reactjs.org/docs/react-without-es6.html

Q3){TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
A: The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

Q4) How can I write comments in JSX?
- it's a javascript so we can write comment
in curly braces { // }

Q5) What is <React.Fragment> </React.Fragment> and <></> ?
Ans -
<React.Fragment> and <> are two ways to create a fragment, which is a way to group a set of children elements together without adding an extra node to the DOM.

A fragment is useful when you want to return multiple elements from a component's render method, but you don't want to add an extra, unnecessary DOM node. If you don't use a fragment, React will wrap your elements in a <div> element, which can cause unwanted layout issues or styling problems.

For example:

Copy code
function MyComponent() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
<React.Fragment> is the way to use fragments prior React v16.6
React v16.6 introduced a shorthand version of the above which is <> and </>

Copy code
function MyComponent() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
The <React.Fragment> and <> tags are equivalent and used to group together multiple children elements together.

It's also worth noting that you can also use a "fragment" as a property and passing children elements via props.children in react.

Copy code
const Fragment = ({children}) => children;

function MyComponent() {
  return (
    <Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </Fragment>
  );
}
In this case the component Fragment is returning the children elements passed inside, without adding any extra html element, it is just a way to group them together.

Q6) What is Virtual DOM?
Ans -
The virtual DOM (Document Object Model) is a representation of the actual DOM in JavaScript. The virtual DOM is a lightweight JavaScript object, which is a copy of the actual DOM. It is used by JavaScript libraries and frameworks, such as React and Vue.js, to optimize the performance of updating the view (i.e., the web page) when the underlying data changes.

When a change occurs in the data, the virtual DOM is updated with the new data. Then, a comparison (reconciliation) is made between the virtual DOM and the actual DOM. The virtual DOM calculates the most efficient way to update the actual DOM, by determining which elements have changed, added, or removed. This is done by comparing the virtual DOM and actual DOM tree node by node. This process is called "diffing".

Once the virtual DOM has determined the most efficient way to update the actual DOM, it makes those changes to the actual DOM. The actual DOM is then re-rendered, and the user sees the updated view.

Using the virtual DOM allows for efficient updates to the view because it reduces the amount of direct manipulation of the actual DOM, which can be slow and resource-intensive. The virtual DOM also ensures that only the necessary changes are made to the view, rather than re-rendering the entire view every time a change occurs.

Overall, Virtual DOM is a powerful feature of libraries like React, which make it easier to build fast, efficient and complex web application. It also helps to improve user experience by re-rendering only the components which are changed, and not the whole page.

Q7) What is Reconciliation in React?
Ans -
Reconciliation is the process that React uses to update the user interface (UI) in response to changes in the component's state or props. It's the mechanism that React uses to determine what changes need to be made to the DOM, and it plays a critical role in making React efficient and fast.

When a component's state or props change, React first creates a virtual representation of the component's next render using a virtual DOM. The virtual DOM is a lightweight JavaScript representation of the actual DOM, and it allows React to quickly determine the difference between the current and the next render.

Once the virtual DOM is updated, React uses a process called "reconciliation" to compare the virtual DOM with the actual DOM, and it determines the minimum set of operations needed to update the actual DOM to match the virtual DOM. These operations can include creating, updating, or deleting elements and their attributes, or updating the component's internal state.

React uses a few heuristics during this process to make it more efficient. For example, it compares each node in the virtual DOM with the corresponding node in the actual DOM, and if the two nodes are not the same, it recursively compares their children. And React also uses the key prop to identify elements that are moved around in a list, this way it could know which element has moved and avoid unnecessary updates.

The end result is that React only updates the parts of the actual DOM that have changed, making the process of updating the UI very fast and efficient, as a result of this process, React can achieve high performance while keeping a flexible structure that allows you to manage the state of your application.

Q8) What is React Fiber?
Ans -
React Fiber is a new version of React's core algorithm. It was first introduced in React v16.0 as an experimental feature and has been the default reconciler since React v16.3. It is not a new way of using React, but it is an improvement to the internal algorithm that React uses to update the virtual DOM and determine what changes need to be made to the actual DOM.

One of the main goals of React Fiber is to improve the performance of React applications, especially for complex and interactive user interfaces. It does this by breaking up the work of updating the UI into smaller, more manageable chunks. React Fiber uses a new concept called "fibers" to represent a unit of work. Each fiber corresponds to a component, and React can schedule and prioritize different fibers based on their priority and dependencies.

The fiber algorithm also allows for more fine-grained control over the rendering process, by allowing React to pause, abort, or reuse work as new updates come in. This allows React to more efficiently handle and update the UI, especially when there are many updates happening at the same time.

In summary React Fiber is a new reconciliation algorithm in React which is more efficient and allows for more fine-grained control over the rendering process.
It aims to improve the performance of React Applications, by breaking the work of updating the UI into smaller manageable chunks.
It also allows React to better handle and update the UI when there are many updates happening at the same time.
It was introduced in React v16.0 as an experimental feature, and it has been the default reconciler since React v16.3

Q9) Why we need keys in React? When do we need keys in React?
Ans -
In React, a key is a special string attribute you need to include when creating lists of elements. The key serves as a unique identifier for each element in the list, which helps React keep track of which items have been added, removed, or moved when the list is updated. Without a key, React uses the index of the element in the array as a default, but this can lead to unexpected behavior, especially when the list is reordered or filtered.
When you render a list of items in React, the component has to update the DOM for each item in the list, even if the contents of the item haven't changed. React uses a virtual DOM to keep track of which elements need to be updated, and the key helps it determine which elements are the same between the previous and the next render. If React can match the key of an element from the previous render with an element in the new render, it knows that the element is the same, and it doesn't need to update the DOM. This can greatly improve the performance of your application, especially when working with large lists.
In summary, keys are needed in React because they help React identify which items in a list have changed, been added, or been removed, and it helps React track the elements in the list, this help React to update efficiently by identifying what has changed and what hasn't.


In React, keys are used when you are rendering a list of elements. The key is a special string attribute that you need to include for each element in the list, and it serves as a unique identifier for each element. Keys are used by React to keep track of which items have been added, removed, or moved when the list is updated, so that it can efficiently update the user interface (UI).

You should use keys when:

Rendering a list of items: Keys are required when you are rendering a list of elements in React, such as in a map function. This is because React uses the key to keep track of each element in the list, so that it can efficiently update the UI when the list changes.

Elements have dynamic ids: If the elements in your list don't have a unique identifier (e.g., an id from a database), then you can use the index of the element as a key. However, keep in mind that the index should only be used as a key if the list is static, and its order does not change, otherwise, when an item is removed or reordered, React will treat the element as a new one and it will cause re-rendering of the whole list.

Elements in the list change frequently: when the elements inside a list change frequently, then using keys can also help React to better optimize the performance by identifying which elements have changed and which haven't

It's important to note that using keys can greatly improve the performance of your React application, especially when working with large lists. However, if your list is small and doesn't change frequently, then using keys might not be necessary.

It is also important to use unique keys within a list, if you use a non-unique key, it might cause unexpected behavior such as element's state not updating as expected or errors being thrown.

Q10) Can we use index as keys in React?
Ans -
It is possible to use the index of an element as a key when rendering a list in React. However, it's generally not recommended and it might lead to unexpected behavior.

When React renders a list, it uses the key to identify each element in the list, so that it can efficiently update the user interface (UI) when the list changes. When the elements in a list change position, React uses the key to determine which elements have moved, and it can update the UI accordingly. However, when the index is used as a key, React has no way of determining which elements have moved, so it treats all of the elements in the list as new, and it has to re-render the entire list. This can cause unnecessary re-renders and make the application slow.

Additionally, if you are using an index as a key and an item is removed from the list, React will reuse the same index for the next item and your list could end up having multiple items with the same key. This will cause unexpected behavior, such as the wrong item being deleted from the UI.

Therefore, it's generally recommended to use a unique and stable identifier for each element in the list when using keys. This could be an id from a database or something unique and stable you can create by yourself. Using the index as a key should only be used if you are sure that the order of the items in the list does not change, as in this case it would work as a unique identifier.

In summary, it is possible to use index as keys in React but it is generally not recommended. It's better to use a unique, stable identifier for each element in the list. It's only safe to use index as key if the order of the elements in the list is guaranteed to never change.

https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66

Q11) What is props in React?
Ans -
It's worth mentioning that props are read-only, which means that a component cannot change its props. If a component needs to change its behavior or appearance based on user interactions, it should keep track of its own internal state instead of trying to change its props.

In summary, Props in React are used to pass data from a parent component to a child component, they are passed as attributes to a component's JSX element, they can be of any JavaScript type and they are read-only, which means that a component cannot change its props, instead it should keep track of its own internal state if it needs to change its behavior based on user interactions.

Q12) What is a Config Driven UI ?
Ans -

A config-driven UI (user interface) is a way of building user interfaces that rely heavily on configuration rather than hard-coded components. In this approach, the layout, structure, and behavior of the UI is defined in a configuration file or object, rather than being hard-coded into the source code of the application.

One of the main advantages of a config-driven UI is that it allows for greater flexibility and ease of customization. For example, a config-driven UI can make it easy to change the layout of a page, add new fields to a form, or enable or disable certain features without having to write any new code. Additionally, it can make it easier for non-technical team members to make updates to the UI without having to understand the underlying codebase.

A config-driven UI can also make it easier to manage large and complex user interfaces, by providing a clear and maintainable structure for the application.

The configuration can be in different forms it can be JSON, YAML, XML or in any other format. The structure of the configuration will be determined by how you plan to use it, and what fields you need to configure. The values and fields in the configuration will be used to build and structure the interface at runtime.

A config-driven UI can be implemented in many different ways, depending on the specific requirements of the application. For example, it can use a declarative approach, where the configuration defines the structure of the UI, and the code generates the necessary components and elements, or it can use an imperative approach, where the configuration defines the actions and interactions of the UI, and the code creates the necessary event handlers and logic.

In summary, A config-driven UI is a way of building user interfaces that relies on configuration rather than hard-coded components, it allows for greater flexibility and ease of customization, it can make it easier for non-technical team members to make updates to the UI, it can be implemented in many different ways, by using a declarative or imperative approach, and the configuration can be in different formats like JSON, YAML, and XML.


References

Code Link: https://bitbucket.org/namastedev/namaste-react-live/src/master/
React without JSX: https://reactjs.org/docs/react-without-jsx.html
Virtual DOM: https://reactjs.org/docs/faq-internals.html
Reconciliation: https://reactjs.org/docs/reconciliation.html
React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
React Without ES6: https://reactjs.org/docs/react-without-es6.html
Index Keys as Anti-Pattern: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

