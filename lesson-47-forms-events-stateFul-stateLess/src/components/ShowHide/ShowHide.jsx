import React, {useState} from "react";

//assets 
import "../../assets/styles/components/show-hide.scss";

function ShowHide() {
 const [isShow, setIsShow] = useState(true);
 console.log({isShow});

return (
<div className="show-hide">
 <button 
 className="show-hide__button"
 onClick={() => {
   // setIsShow(!isShow);
   setIsShow(state => !state); //правильно сетати стейт так

  }}
  >
  { isShow ? "Hide" : "Show" } block   
  </button>
 { !!isShow && <div className="show-hide__block"></div> }
</div>
);
}
export default  ShowHide;