import "./App.css";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Main from "./Dashbord/Main";
import {
  Routes,
  Route,
} from "react-router-dom";
import AddProduct from "./Dashbord/AddProduct";
import {Provider} from 'react-redux'
import store from './store/store';
import Cart from './Component/Cart'
import { useState,useEffect } from "react";
import Pagenotfound from "./Component/Pagenotfound";


function App() {
  const [auth, setauth] = useState("")
  useEffect(() => {
    const token = localStorage.getItem('auth-token')
    setauth(token)
  }, [auth])
  return (
    <>
    <Provider store={store}>
        <Routes>
         <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup />} />
          { auth?
            <>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/admin" element={<Main/>}/>
          <Route exact path="/addproduct" element={<AddProduct/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          </>: <Route  exact path="*" element={<Pagenotfound/>}/>
          }
        </Routes>
     </Provider>
    </>
  );
}

export default App;



