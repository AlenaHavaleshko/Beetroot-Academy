// assets
import "./button.scss";

function  Button({children}) {

 const onClick = () => {
  console.log("click")
 }

 return (
  <button onClick={onClick} className="button">{children}</button>
 );
}
export default Button;