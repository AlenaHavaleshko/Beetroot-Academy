import React, { useState, useEffect } from "react";  // { useState } - массив з 2ма элементами

// assets
import "../../assets/styles/containers/counter.scss";

function CounterFunction () {
 const [number, setNumber] = useState(0);             // компонент state less, коли я не контролюю ні change event 
 const [inputValue, setInputValue] = useState("123")  // inputValue - це те зо ми міняєм, setImputValues -те, чим ми міняєм  

 const handleClick = () => {
 setNumber(number + 1);
 };

 const setDefaultInputValue = () => {
  setInputValue("Hello world");
 }
 useEffect (() => {
  return () => alert("OOOPS!!");
 }, []);

 useEffect (() => {
  console.log("Element is on page");
 }, []);

//  useEffect (() => {
// if (inputValue === "clear") {
//  console.log("clear");
//  setNumber(0);
// }
//  }, [inputValue]);
 // console.log("render");

 return (
  <div className="counter">
   <p>{number}</p>
   <button onClick={handleClick}>Count</button>
   
   <div>
    <input 
     type="text" 
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}  // це я ловлю те,що вводиться з клавіатури, далі,щоб компонент був StatePullмені треба те що вводить користувач ссетати в Value
     />
    <button onClick={setDefaultInputValue}>Set default</button>
   </div>
   <code>{inputValue}</code>
  </div>
 );
}
export default CounterFunction;