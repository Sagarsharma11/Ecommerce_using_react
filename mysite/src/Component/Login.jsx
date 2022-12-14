import "./css/Login.css";
const Login = () => {
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
            <form>
              <label>Username Or Email Address</label>
              <br />
              <input
                className="mt-2 mb-4"
                type="text"
                name="name"
                placeholder="Username / Email Address"
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="text"
                className="mt-2 mb-3"
                name="password"
                placeholder="Enter Password"
              />
              <br />
              <p className="text-danger">Forgot Password?</p>
              <div className="row formfooter">
                <div className="col-md-6">
                  <p>
                    Don’t have an account?
                    <span className="text-danger"> Sign Up</span> here
                  </p>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-danger">Login</button>
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
