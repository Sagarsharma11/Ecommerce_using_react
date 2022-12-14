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


function App() {
  return (
    <>
    <Provider store={store}>
        <Routes>
         <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup />} />
         <Route exact path="/home" element={<Home/>} />
          <Route exact path="/admin" element={<Main/>}/>
          <Route exact path="/addproduct" element={<AddProduct/>}/>
        </Routes>
     </Provider>

    </>
  );
}

export default App;



