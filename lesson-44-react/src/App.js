// containers
import Header from "./containers/Header/Header";
import Footer  from "./containers/Footer/Footer";
import Banner from "./containers/Banner/Banner";
import Content from "./containers/Content/Content";

// elements
import Button  from "./elements/Button";
import Logo from "./elements/Logo";

// styles 
import "./assets/styles/main.scss";

const TITLE = "PAGE_TITLE";

function App() {
  return (
    <main className="main">
      <Header/>
      <Banner/>
      <Content/>      
      <Footer/>
    </main>
  );
}

export default App;
