import React, { useRef } from "react";

//containers
// import AuthForm from "./container/AuthForm/AuthForm";

//component
import CounterComponent from "./container/CounterComponent/CounterComponent";
import ReachInput from "./container/ReachInput/ReachInput";
import Footer from "./container/Footer/Footer"
import AboutUs from "./container/AboutUs";
import AuthFormFormik from "./container/AuthFormFormik/AuthFormFormik";

// import AuthFormAntd from "./container/AuthFormAntd/AuthFormAntd";
// import AuthFormHomeTask from "./container/AuthFormHomeTask/AuthFormHomeTask";


function App() {
const ref = useRef(null);

console.log(ref);

const handleScroll = () => {
  console.log(ref.current);
  if (ref.current) {
    ref.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest" });
  }   // skroll to our castom elemnt
}


  return (
    <div className="App">
      <CounterComponent/>
      <ReachInput/>
      <button onClick={handleScroll}>Scroll</button>
      <AuthFormFormik/>  
      <AboutUs ref={ref} title="About Us"/>
      {/* <AuthFormHomeTask></AuthFormHomeTask> */}
      {/* <AuthFormAntd/> */}
      {/* <AuthForm/> */}
      {/* <DatePicker/> */}
      <Footer/>
     
    </div> 
  );
}

export default App;
