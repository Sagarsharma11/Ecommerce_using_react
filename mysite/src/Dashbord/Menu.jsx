import React from 'react'
import {
  Link,
} from "react-router-dom";
function Menu() {
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="active">
                <Link to="/admin"><i className="fa fa-dashboard"></i> <span>Dashboard</span></Link>
              </li>
              <li>
                <Link to="/addproduct"><i className="fa fa-user-md"></i> <span>Add Product</span></Link>
              </li>
              <li>
                <Link to="/admin"><i className="fa fa-wheelchair"></i> <span>Patients</span></Link>
              </li>
              <li>
                <Link to="/admin"><i className="fa fa-calendar"></i> <span>Appointments</span></Link>
              </li>
              <li className="submenu">
                <Link to="/admin"><i className="fa fa-user"></i> <span> Employees </span> <span className="menu-arrow"></span></Link>
                <ul style={{ display: `none` }}>
                  <li><Link to="/admin">Employees List</Link></li>
                  <li><Link to="/admin">Leaves</Link></li>
                  <li><Link to="/admin">Holidays</Link></li>
                  <li><Link to="/admin">Attendance</Link></li>
                </ul>
              </li>
              <li className="submenu">
                <Link to="#"><i className="fa fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></Link>
                <ul style={{ display: `none` }}>
                  <li><Link to="/admin"> Employee Salary </Link></li>
                  <li><Link to="/admin"> Payslip </Link></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu