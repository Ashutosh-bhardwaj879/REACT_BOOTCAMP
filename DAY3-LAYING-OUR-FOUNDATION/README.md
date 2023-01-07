## Q1)What is JSX?

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is often used with frameworks such as React to build user interfaces. Some of the benefits of using JSX include:

## Example 1 using JSX:

const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
Example 2 Without JSX:

---

const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

## Q2)Superpowers of JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is often used with frameworks such as React to build user interfaces. Some of the benefits of using JSX include:

Improved readability: JSX makes it easier to read and understand code that generates UI elements by allowing you to write HTML-like syntax in your JavaScript.

Type checking: JSX supports type checking, which can help catch errors at development time, rather than runtime.

Performance: JSX gets compiled into regular JavaScript function calls, which can make it faster to execute.

Improved code completion and error highlighting: Many code editors have plugins that provide improved code completion and error highlighting for JSX, making it easier to write and debug your code.

Easy to learn: If you know HTML, learning JSX is easy, as it is just a superset of HTML with a few additional features.

## Q3)Role of type attribute in script tag? What options can I use there?

The type attribute in a script tag specifies the type of script that is being used. It is optional, but it is a good practice to include it to help the browser process the script correctly. The value of the type attribute should be a MIME type, such as text/javascript or text/ecmascript.

Here are some options for the type attribute:

text/javascript: This is the default value for the type attribute and indicates that the script contains JavaScript code.

text/ecmascript: This indicates that the script contains ECMAScript code, which is a standardized version of JavaScript.

application/javascript: This indicates that the script contains JavaScript code and is treated as a binary file by the browser.

application/x-javascript: This is similar to application/javascript, but it is not as widely supported.

text/vbscript: This indicates that the script contains VBScript code, which is a scripting language used by Internet Explorer. It is not supported by other modern browsers.

It is important to note that the type attribute is not required for modern browsers, as they can usually determine the correct script type based on the script file extension. However, it is still a good practice to include the type attribute to ensure compatibility with older browsers and to make your code more explicit.

## Q4){TitleComponent} VS {<Tit1eComponent/>} VS {<Tit1eComponent></Tit1eComponent>} in JSX

In JSX, curly braces are used to include a JavaScript expression within the JSX code. The expression inside the curly braces can be a variable, a function call, or any valid JavaScript expression.

The difference between {TitleComponent}, {<Tit1eComponent/>}, and {<Tit1eComponent></Tit1eComponent>} is in how they are evaluated.

{TitleComponent} will be evaluated as a JavaScript expression and will insert the result of the expression into the JSX code. If TitleComponent is a reference to a JSX element, this will render the element.
{<Tit1eComponent/>} is also evaluated as a JavaScript expression, but in this case, it is creating and rendering a new instance of the Tit1eComponent JSX element.
{<Tit1eComponent></Tit1eComponent>} is similar to the above, but it is creating and rendering a new instance of the Tit1eComponent JSX element with no children. This is known as a self-closing element.
So, the main difference between these three expressions is in whether they are rendering an existing element or creating and rendering a new instance of an element.

The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {< />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
Example
<TitleComponent>
<FirstChildComponent />
<SecondChildComponent />
<ThirdChildComponent />
</TitleComponent>
