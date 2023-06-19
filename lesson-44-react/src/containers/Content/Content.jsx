import Blog from "../Blog/Blog";
import News from "../News/News";

// assets
import "../../assets/styles/containers/content.scss";

function Content() { 
 return (
  <div className="content">
  <Blog/>
  <News/>
  </div>
 );
}

export default Content;