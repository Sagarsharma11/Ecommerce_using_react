import './App.css';
import NavBar from './Component/NavBar';
import Banner from './Component/Banner';
import NavbarHeader from './Component/NavbarHeader';
import Trending from './Component/Trending'

function App() {
  return (
    <>
        <NavbarHeader/>
        <NavBar/>
        <Banner/>
        <Trending/>
    </>
  );
}

export default App;
