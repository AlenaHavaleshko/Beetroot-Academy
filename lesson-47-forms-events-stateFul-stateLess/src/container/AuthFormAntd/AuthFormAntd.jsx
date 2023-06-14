import React, { useState } from "react";
import { Row, Col, Input, Button, Checkbox, Select } from "antd";

// // elements

// import CustomInput from "../../elements/CustomInput";
// import Button from "../../elements/Button";

 //assets 
import "../../assets/styles/containers/auth-form.scss";

function AuthFormAntd () {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isRememberMe, setIsRememberMe] = useState(false);
 const [userRole, setUserRole] = useState("user");


 const handleSubmit = (e) => {       //  щоб форма не перезагружалася
  e.preventDefault();


  setEmail("");
  setPassword("");                 // очищуємо інпут при сабміті
 }

 const handleSelectRole = e => {
  console.log(e);
  setUserRole(e);

  if (e.value === "admin") {
   setIsRememberMe(true)
  };
 }

 const handleChangeRememberMe = e => {
  setIsRememberMe(e.target.checked);

  if (!e.target.checked && userRole ==="admin") {
   setUserRole("user");
  }
 }

 console.log({email, password});   // виводим в консолі те,что в інпуті вводм

 return (
  <form 
    className ="lsn-auth-form"
    onSubmit={handleSubmit}
  >
   <Input
     label={"Email*"}
     placeholder={"Enter your email"} 
     onChange={e => setEmail(e.target.value)}
     type={"email"}
   />
   <Input.Password
      label={"Password*"}
      placeholder={"Enter your password"} 
      // type={"password"}
      onChange={e => setPassword(e.target.value)}
   />
   <Checkbox                         // з antd
      checked={isRememberMe}
      onChange={handleChangeRememberMe}
   >
      Remember me
   </Checkbox>
   <Select
      value={userRole}
      onChange={handleSelectRole}
      options={[
       {value: "admin", lable: "Admin"},
       {value: "user", lable: "User"},
       {value: "content-maker", lable: "Content maker"}
      ]}
   >
   </Select>

   {/* <label htmlFor="">
    <input 
       type="checkbox"
       checked={isRememberMe}
       onChange={handleChangeRememberMe}
    />
    {" "} Remember me
   </label> */}
   {/* <select
      value={userRole}
      onChange={handleSelectRole}
   >
     <option value="admin">Admin</option>
     <option value="user">User</option>
     <option value="content-maker">Content maker</option>
   </select> */}
   <Button 
      htmlType="submit">
      Login
   </Button>

  </form>
 );
}

export default AuthFormAntd;