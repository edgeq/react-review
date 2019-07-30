//call useState
// return a piece of state
// and a function to call is
import { useState } from "react";

function useToggle(val = false) {
  // set a piece of state, and a function to change state
  const [item, action] = useState(val);
  // define function that changes state
  const toggle = () => {
    // returns the opposite of what gets passed in
    action(!item);
  };
  // return the initial state and resulting function
  // you can extract these in a component
  return [item, toggle];
}

export default useToggle;
