import React from "react";    // useState - відповідає за зміну стану state, у нього є свій state і set

// hook

import useCounter from "../../hooks/useCounter";

// assets

import "../../assets/styles/containers/counter-component.scss"

function CounterComponent() {
 const [value, setValue] = useCounter();    // 0 - це state в useState


 return (
  <div className="lsn-counter-component">
   <code className="lsn-counter-component__label">
    {value}
   </code>
   <button 
     className="lsn-counter-component__button"
     onClick={() => setValue(state => state + 1)}   // state збільшуємно на 1
     >
      Increment
   </button>
  </div>
 );
}

export default CounterComponent;