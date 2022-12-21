import "./App.css";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Main from "./Dashbord/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddProduct from "./Dashbord/AddProduct";

function App() {
  return (
    <>
    
        <Routes>
         <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup />} />
         <Route exact path="/home" element={<Home/>} />
          <Route exact path="/admin" element={<Main/>}/>
          <Route exact path="/addproduct" element={<AddProduct/>}/>
        </Routes>
  

    </>
  );
}

export default App;



