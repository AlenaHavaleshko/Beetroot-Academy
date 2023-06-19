import React from "react";

// assets
import "../../assets/styles/elements/button.scss"

function Button ({children, htmlType}) {

 return  (
  <button 
  className="lsn-button"
  type={htmlType}
  >
   { children }
  </button>
 );
}

export default Button;