import React from "react";

//containers
// import AuthForm from "./container/AuthForm/AuthForm";
import AuthFormAntd from "./container/AuthFormAntd/AuthFormAntd";
import AuthFormHomeTask from "./container/AuthFormHomeTask/AuthFormHomeTask";


//component
// import ShowHide from "./components/ShowHide";
// import SongsList from "./container/SongsList/index"
// import EditableSongsList from "./container/EditableSongsList"
// import MyCounter from "./container/MyCounter";
// import ToDoList from "./container/ToDoList";



function App() {
  return (
    <div className="App">
      <AuthFormHomeTask></AuthFormHomeTask>
      {/* <AuthFormAntd/> */}
      {/* <AuthForm/> */}
      {/* <ToDoList/> */}
      {/* <ShowHide/> */}
      {/* <MyCounter/>
      <SongsList/>
      <EditableSongsList/> */}
      {/* <DatePicker/> */}
    </div> 
  );
}

export default App;
