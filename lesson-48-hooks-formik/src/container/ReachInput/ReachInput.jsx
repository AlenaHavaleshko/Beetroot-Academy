import React, { useState } from "react";    // useState - відповідає за зміну стану state, у нього є свій state і set

// assets

import "../../assets/styles/containers/counter-component.scss"

function ReachInput() {
 const [value, setValue] = useState(0);    // 0 - це state в useState


 return (
  
  <div className="lsn-counter-component">
   <code className="lsn-counter-component__label">
    {value}
   </code>
  <input 
    placeholder="Input placeholder" 
    type="text" 
    className="lsn-counter-component__input"
    onBlur={() => setValue(state => state + 1)}
  />
  </div>
 );
}

export default ReachInput;