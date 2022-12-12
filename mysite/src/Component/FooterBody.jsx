import "./css/FooterBody.css";
const FooterBody = () => {
  return (
    <>
      <div className="container-fluid footerbody">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="footerlogo mt-5">
                <a href="/">
                  <i class="fa-sharp fa-solid fa-store"></i>
                  <span className="fw-bold"> My</span>site
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="shopmen text-light">
                <h4 className="mt-3">Shop Men</h4>
                <p className="mt-4">Clothing Fashion</p>
                <p>Winter</p>
                <p>Summer</p>
                <p>Formal</p>
                <p>Casual</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="shopmen text-light">
                <h4 className="mt-3">Shop Women</h4>
                <p className="mt-4">Clothing Fashion</p>
                <p>Winter</p>
                <p>Summer</p>
                <p>Formal</p>
                <p>Casual</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shopmen mx-4 text-light">
                <h4 className="mt-3">Baby Collection</h4>
                <p className="mt-4">Clothing Fashion</p>
                <p>Winter</p>
                <p>Summer</p>
                <p>Formal</p>
                <p>Casual</p>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="shopmen text-light">
                <h4 className="mt-3">Quick Links</h4>
                <p className="mt-4">Clothing Fashion</p>
                <p>Winter</p>
                <p>Summer</p>
                <p>Formal</p>
                <p>Casual</p>
              </div>
            </div>
            <p className="text-light">
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div className="row">
              <div className="col-md-12 copyright">
                <p className="text-center ">
                  Copyright ©2022 All rights reserved | This template is made
                  with by <span className="text-light">Sharma Brother</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterBody;
