import React, { useState } from "react";    // useState - відповідає за зміну стану state, у нього є свій state і set

// assets

import "../../assets/styles/containers/counter-component.scss"

function WithCounter({ children}) {
 const [value, setValue] = useState(0);    // 0 - це state в useState


 return (
  
  <div className="lsn-counter-component">
   { children }
  </div>
 );
}

export default WithCounter;