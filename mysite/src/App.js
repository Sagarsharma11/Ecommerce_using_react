import "./App.css";
import NavBar from "./Component/NavBar";
import Banner from "./Component/Banner";
import NavbarHeader from "./Component/NavbarHeader";
import Trending from "./Component/Trending";
import YouMayLike from "./Component/YouMayLike";
import FooterTop from "./Component/FooterTop";
import FooterBody from "./Component/FooterBody";

function App() {
  return (
    <>
      <NavbarHeader />
      <NavBar />
      <Banner />
      <Trending />
      <YouMayLike />
      <FooterTop />
      <FooterBody />
    </>
  );
}

export default App;
