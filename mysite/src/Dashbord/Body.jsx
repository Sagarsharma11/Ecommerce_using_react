import React from 'react'

function Footer() {
  return (
    <div>
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                          <span className="dash-widget-bg1"><i className="fa fa-stethoscope" aria-hidden="true"></i></span>
                          <div className="dash-widget-info text-right">
                            <h3>98</h3>
                            <span className="widget-title1">Doctors <i className="fa fa-check" aria-hidden="true"></i></span>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <span className="dash-widget-bg2"><i className="fa fa-user-o"></i></span>
                            <div className="dash-widget-info text-right">
                                <h3>1072</h3>
                                <span className="widget-title2">Patients <i className="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <span className="dash-widget-bg3"><i className="fa fa-user-md" aria-hidden="true"></i></span>
                            <div className="dash-widget-info text-right">
                                <h3>72</h3>
                                <span className="widget-title3">Attend <i className="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div className="dash-widget">
                            <span className="dash-widget-bg4"><i className="fa fa-heartbeat" aria-hidden="true"></i></span>
                            <div className="dash-widget-info text-right">
                                <h3>618</h3>
                                <span className="widget-title4">Pending <i className="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
    </div>
  )
}

export default Footer