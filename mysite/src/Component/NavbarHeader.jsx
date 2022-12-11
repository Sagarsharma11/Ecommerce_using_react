import React from 'react'
import './css/NavbarHeader.css'

function NavbarHeader() {
    return (
        <>
            <div style={{ height: "30px", widht: "100%", backgroundColor: "#1f1f1f" }}>

            </div>
            <div className='container-fluid border-bottom py-2'>
                <div className='row NavbarHeader'>
                    <div className='col-md-6'>
                        <ul>
                            <li>About Us</li>
                            <li>Privacy</li>
                            <li>FAQ</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <ul>
                            <li className='border-end px-2'>My Wishlist</li>
                            <li className='border-end px-2'>Track Your Order</li>
                        </ul>
                        <div className='social-media'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-google"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarHeader