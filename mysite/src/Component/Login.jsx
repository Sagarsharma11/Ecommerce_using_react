import "./css/Login.css";
import {useState} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';
const Login = () => {
  const [login, setLogin] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const onSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/user/login`, {
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
      body: JSON.stringify({email:login.email,password:login.password})
    });
    console.log({email:login.email,password:login.password})
    const result = await response.json();
    console.log(result)
    if(!result){
      return console.log("Unsuccessfull")
    }
    localStorage.setItem('auth-token',result.auth_token)
    navigate("/home")
  }
  const onChange = (e) =>{
    setLogin({...login,[e.target.name]:e.target.value})
    console.log(login)
  }

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 mainform bg-white shadow-lg p-5 mt-5 mb-4">
            <div className="formheader">
              <h2 className="text-center">Login</h2>
              <p className="text-center mt-4">
                Enter Login details to get access
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <label>Username Or Email Address</label>
              <br />
              <input
                className="mt-2 mb-4"
                type="email"
                name="email"
                placeholder="Username / Email Address"
                onChange={onChange}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                className="mt-2 mb-3"
                name="password"
                placeholder="Enter Password"
                onChange={onChange}
              />
              <br />
              <p className="text-danger">Forgot Password?</p>
              <div className="row formfooter">
                <div className="col-md-6">
                  <p>
                    Don’t have an account?
                    <Link to="/signup"><span className="text-danger text-decoration-none"> Sign Up</span> here</Link>
                  </p>
                </div>
                <div className="col-md-6">
                 <button type="submit" className="btn btn-danger">Login</button> 
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
export default Login;
