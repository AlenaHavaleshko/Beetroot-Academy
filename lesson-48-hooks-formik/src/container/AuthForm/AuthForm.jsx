import React, { useState } from "react";

// elements
import CustomInput from "../../elements/CustomInput";
import Button from "../../elements/Button";

 //assets 
import "../../assets/styles/containers/auth-form.scss";

function AuthForm () {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isRememberMe, setIsRememberMe] = useState(false);
 const [userRole, setUserRole] = useState("user");


 const handleSubmit = (e) => {
  e.preventDefault();


  setEmail("");
  setPassword("");                 // очищуємо інпут при сабміті
 }

 const handleSelectRole = (e) => {
  setUserRole(e.target.value);

  if (e.target.value === "admin") {
   setIsRememberMe(true)
  };
 }

 const handleChangeRememberMe = (e) => {
  setIsRememberMe(e.target.chekced);

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
   <CustomInput
     label={"Email*"}
     placeholder={"Enter your email"} 
     onChange={e => setEmail(e.target.value)}
     type={"email"}
   />
   <CustomInput 
      label={"Password*"}
      placeholder={"Enter your password"} 
      type={"password"}
      onChange={e => setPassword(e.target.value)}
   />
   <label htmlFor="">
    <input 
       type="checkbox"
       checked={isRememberMe}
       onChange={handleChangeRememberMe}
    />
    {" "} Remember me
   </label>
   <select
      value={userRole}
      onChange={handleSelectRole}
   >
     <option value="admin">Admin</option>
     <option value="user">User</option>
     <option value="content-maker">Content maker</option>
   </select>
   <Button 
      htmlType="submit">
      Login
   </Button>

  </form>
 );
}

export default AuthForm;