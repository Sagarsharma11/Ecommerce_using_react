import React from 'react'
import {Link} from "react-router-dom";
import Logo from "./image/logo.png";
import Userimg from "./image/user-04.jpg";

function TopHeader() {
  return (
    <div>
        <div className="header">
			<div className="header-left">
				<Link to='/admin'  className="logo">
					<img src={Logo} width="35" height="35" alt="logo"/> <span>Preclinic</span>
				</Link>
			</div>
			<a id="toggle_btn" to='/admin'><i className="fa fa-bars"></i></a>
            <a id="mobile_btn" className="mobile_btn float-left" to="#sidebar"><i className="fa fa-bars"></i></a>
            <ul className="nav user-menu float-right">
                <li className="nav-item dropdown d-none d-sm-block">
                    <Link to="/admin" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i className="fa fa-bell-o"></i> <span className="badge badge-pill bg-danger float-right" 
                        style={{marginTop: `5px`, marginLeft: `-5px`}}>0</span>
                    </Link>
                    {/*<div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span>Notifications</span>
                        </div>
                    </div> */}
                </li>
                <li className="nav-item dropdown d-none d-sm-block">
                    <Link to='/admin' id="open_msg_box" className="hasnotifications nav-link">
                        <i className="fa fa-comment-o"></i> <span className="badge badge-pill bg-danger float-right"
                         style={{marginTop: `5px`, marginLeft: `-5px`}}>0</span>
                    </Link>
                </li>

                


                {/*<li className="nav-item dropdown has-arrow">
                    <Link to="/admin" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span className="user-img">
							<img className="rounded-circle" src={Userimg} alt="Admin"/>
							<span className="status online"></span>
						</span>
						<span>Designb</span>
                    </Link>
					<div className="dropdown-menu">
						<a className="dropdown-item" to='/admin'>My Profile</a>
                        <a className="dropdown-item" to="/admin">Edit Profile</a>
						<a className="dropdown-item" to="/admin">Settings</a>
						<a className="dropdown-item" to="/admin">Logout</a>
					</div>
                </li>*/}
            </ul>
        </div>
    
    </div>
  )
}

export default TopHeader