// < !-- < script >
//         var heading = React.createElement("h1", {}, "This is love");
// var root = ReactDOM.createRoot(document.getElementById("root1"));
// root.render(heading);

// var heading = React.createElement("h1", {}, "This is lovew");
// console.log(heading);
// var root = ReactDOM.createRoot(document.getElementById("root2"));
// console.log(root);
// root.render(heading);
//     </script > -->

const heading1 = React.createElement('h1', { id: 'title' }, 'Heading1')
const heading2 = React.createElement('h2', { id: 'title' }, 'Heading2')
const container = React.createElement('div', { id: 'container' }, [
    heading1,
    heading2,
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)
