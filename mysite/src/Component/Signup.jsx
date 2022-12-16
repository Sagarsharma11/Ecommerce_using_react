import "./css/Signup.css";
import {useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
const Signup = () => {
  const [obj, setObj] = useState({
    name:"",
    email:"",
    password:"",
  })
  const navigate = useNavigate();
  const handleClick = async(e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/user/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({name:obj.name,email:obj.email,password:obj.password})
    });

    if(!response){
      return console.log("Not Submited")
    }
    const result = await response.json()
    if(result.auth_token !=null){
      return navigate("/")
    }
    console.log(result)
  }
  const onChange = (e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 mainform bg-white shadow-lg p-5 mt-5 mb-4">
            <div className="formheader">
              <h2 className="text-center">Sign Up</h2>
              <p className="text-center mt-3">
                Create your account to get full access
              </p>
            </div>
            <form onSubmit={handleClick} >
              <label>Full Name</label>
              <br />
              <input
                className="mt-2 mb-3"
                type="text"
                name="name"
                minLength={3}
                placeholder="Enter Full Name"
                onChange={onChange}
              />
              <br />
              <label>Email Address</label>
              <br />
              <input
                className="mt-2 mb-3"
                type="email"
                name="email"
                minLength={3}
                placeholder="Enter Email Address"
                onChange={onChange}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="text"
                className="mt-2 mb-3"
                name="password"
                placeholder="Enter Password"
                minLength={3}
                onChange={onChange}
              />
              <br />
              <label>Confirm Password</label>
              <br />
              <input
                type="password"
                name="cpassword"
                className="mt-2 mb-3"
                placeholder="Enter Confirm Password"
                minLength={3}
              />
              <br />
              <div className="row formfooter">
                <div className="col-md-6">
                  <p>
                    Already have an account?
                    <Link to="/">
                    <span className="text-danger"> Login</span> here
                    </Link>
                  
                  </p>
                </div>
                <div className="col-md-6">
                  <button disabled={obj.name<=3 || obj.email<=3 || obj.password<=3} className="btn btn-danger">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};
export default Signup;
