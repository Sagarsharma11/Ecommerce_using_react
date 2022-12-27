import React from 'react'
import './css/Navbar.css'
import { useSelector } from 'react-redux'

function NavBar() {
    const items = useSelector(state=>state.cart)
    return (
        <div className='container-fluid Navbar'>
            <div className='row'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="/">
                        <i className="fa-sharp fa-solid fa-store"></i>
                            <span className='fw-bold'> My</span>site
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Baby Collection</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="/">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled active" href="/" tabIndex="-1" aria-disabled="true">
                                        Cart
                                        <i class="fa-sharp fa-solid fa-cart-plus"></i>
                                        {items.length}
                                    </a>
                                </li>
                              
                            </ul>
                            <form className="d-flex ">
                                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar