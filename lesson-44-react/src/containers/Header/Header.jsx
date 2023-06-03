import React from "react";

// elements
import Button from "../../elements/Button";
import Logo from "../../elements/Logo";

// assets
import "../../assets/styles/containers/header.scss";

function Header() {
return (
 <header className="header">
  <Logo></Logo>
  <p className="header-text">Blog name</p>
  <div>
   <Button></Button>
   <Button></Button>
   <Button></Button>
   <Button></Button>
   <Button></Button>
   

  </div>
 </header>
)
}
export default Header;
