// assets
import "../../assets/styles/elements/logo.scss";

function Logo() {

 const onClick = () => {
  console.log("click")
 }

 return (
  <div className="header-logo" onClick={onClick}></div>
 );
}
export default Logo;