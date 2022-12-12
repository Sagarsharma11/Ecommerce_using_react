import "./css/FooterTop.css";
const FooterTop = () => {
  return (
    <>
      <div className="container-fluid footertop">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-5">
              <h4 className="text-light">Subscribe Newsletter</h4>
              <p className="text-light">
                Subscribe newsletter to get 5%
                <br /> on all products.
              </p>
            </div>
            <div className="col-md-6 mt-5 footerinput text-center">
              <input type="text" placeholder="Enter Your Email" />
              <button className="btn btn-danger">Subscribe</button>
            </div>
            <di className="col-md-3 mt-5 ">
              <div className="social-media">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </di>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterTop;
