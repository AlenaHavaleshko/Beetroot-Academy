import React from "react";

//assets
import "../../assets/styles/containers/form.scss";

function Form() {
 return (
  <form action="">
   <input type="text" name="userNme"/>
   <input type="text" name="emale"/>
   <button type="submit">Submit</button>
  </form>
 );
}

export default Form;