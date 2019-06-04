
/**
 * There are two ways to write React.Components.
 * Class and function.
 *  - Class componenents inherit the Component's existing methods
 *  - Function components are intended to be simpler components and require Hooks for more complex implementations
 */

// class Hello extends React.Component {
//   render() {
//     return (
//     <div>
//       <h1>Hello, from React!</h1>
//       <h1>Hello, from React!</h1>
//       <h1>Hello, from React!</h1>
//     </div>
//     )
//   }
// }

function Hello() {
  return (
    <div>
      <h1>Hi from a function</h1>
      <h1>Hi from a function</h1>
    </div>
    )
}

ReactDOM.render(<Hello />, document.getElementById('root'));