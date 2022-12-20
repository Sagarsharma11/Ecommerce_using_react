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

function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup />} />
         <Route exact path="/home" element={<Home/>} />
          <Route exact path="/admin" element={<Main/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;



