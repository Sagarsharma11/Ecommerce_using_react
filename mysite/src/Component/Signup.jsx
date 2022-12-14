import "./css/Signup.css";
const Signup = () => {
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
            <form>
              <label>Full Name</label>
              <br />
              <input
                className="mt-2 mb-3"
                type="text"
                name="name"
                placeholder="Enter Full Name"
              />
              <br />
              <label>Email Address</label>
              <br />
              <input
                className="mt-2 mb-3"
                type="email"
                name="email"
                placeholder="Enter Email Address"
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
              <label>Confirm Password</label>
              <br />
              <input
                type="password"
                name="cpassword"
                className="mt-2 mb-3"
                placeholder="Enter Confirm Password"
              />
              <br />
              <div className="row formfooter">
                <div className="col-md-6">
                  <p>
                    Already have an account?
                    <span className="text-danger"> Login</span> here
                  </p>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-danger">Sign Up</button>
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
