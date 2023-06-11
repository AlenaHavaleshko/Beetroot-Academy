import React, { useState } from "react";

function MyCounter () {
 const [number, setNumber] = useState(0);

 const increaseNumber= () => {
  setNumber(number +  1);
 }

 return (
  <div>
   <p>{number}</p>
   <button onClick={increaseNumber}>Add</button>
  </div>
 )
}

export default MyCounter;