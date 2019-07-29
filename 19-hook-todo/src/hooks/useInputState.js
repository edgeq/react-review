import { useState } from "react";
// Hooks allow for reusable code patterns.

// this will be invoked as useInputState()
// initialVal is placeholder for an argument to pass in.
export default initialVal => {
  // references to stateful item and function for changing state
  const [value, setValue] = useState(initialVal);
  // define function that calls the stateful function
  const handleChange = e => {
    // setValue is user definable
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };

  // value is state,
  // handleChange is the function that sets state based on e.target.value
  // reset will setValue to ""
  return [value, handleChange, reset];
};
