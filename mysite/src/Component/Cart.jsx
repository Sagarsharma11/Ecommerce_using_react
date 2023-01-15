import React from 'react'
import NavbarHeader from "./NavbarHeader";
import NavBar from "./NavBar";
import FooterTop from "./FooterTop";
import FooterBody from "./FooterBody";
// import laptopImg from "./image/youmaylike1.jpg"

function Cart() {
    return (
        <>
            <NavbarHeader />
            <NavBar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 mt-4 mb-4'>
                        <div className='AddToCart bg-white p-1'>
                            <h4 className='text-center'>Add To Cart</h4>
                        </div>
                        <div className='AddressDetail bg-white p-3 mt-2'>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                                <h4 className='text-center'>From Saved Address</h4>
                                <button class="btn btn-primary" type="button">Enter Delivery Pincode</button>
                            </div>
                        </div>

                        <div className='ProductDetail bg-white mt-3'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img className='w-100' src={require(`./image/youmaylike1 (6).jpg`)} alt="AddToCartImage" />
                                </div>
                                <div className='col-md-5 p-2'>
                                    <h5>MACBOOK 204C SSD SLIM</h5>
                                    <p>16.2 inch, Space Grey�, 2.2 kg</p>
                                    <p>Seller:PETILANTE Online</p>
                                    <p><s>₹1,02,090</s> <strong> ₹73,690</strong> <span className='text-success'>27% Off  </span>5 offers applied</p>
                                </div>
                                <div className='col-md-4 p-2'>
                                    <p>Delivery by Sun Jan 1 | <span className='text-success'>Free</span> <s>₹40</s></p>
                                </div>
                            </div>
                            <div className='row ProductIncrement'>
                                <div className='col-md-3'>
                                    <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group ml-4" role="group" aria-label="First group">
                                            <button type="button" class="btn btn-outline-secondary">+</button>
                                            <button type="button" class="btn btn-outline-secondary">2</button>
                                            <button type="button" class="btn btn-outline-secondary">-</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2'><p><strong>SAVE FOR LATER</strong></p></div>
                                <div className='col-md-3 p-2'><p><strong>REMOVE</strong></p></div>
                            </div>
                        </div>
                        <div className='ProductDetail bg-white mt-3 mb-'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img className='w-100' src={require(`./image/youmaylike1 (6).jpg`)} alt="AddToCartImage" />
                                </div>
                                <div className='col-md-5 p-2'>
                                    <h5>MACBOOK 204C SSD SLIM</h5>
                                    <p>16.2 inch, Space Grey�, 2.2 kg</p>
                                    <p>Seller:PETILANTE Online</p>
                                    <p><s>₹1,02,090</s> <strong> ₹73,690</strong> <span className='text-success'>27% Off  </span>5 offers applied</p>
                                </div>
                                <div className='col-md-4 p-2'>
                                    <p>Delivery by Sun Jan 1 | <span className='text-success'>Free</span> <s>₹40</s></p>
                                </div>
                            </div>
                            <div className='row ProductIncrement'>
                                <div className='col-md-3'>
                                    <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group ml-4" role="group" aria-label="First group">
                                            <button type="button" class="btn btn-outline-secondary">+</button>
                                            <button type="button" class="btn btn-outline-secondary">2</button>
                                            <button type="button" class="btn btn-outline-secondary">-</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2'><p><strong>SAVE FOR LATER</strong></p></div>
                                <div className='col-md-3 p-2'><p><strong>REMOVE</strong></p></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='PriceDetail bg-white mt-4 '>
                            <h4 className='p-1 ml-2 text-secondary'>PRICE DETAILS</h4><hr />
                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Price (6 items)</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2'>₹5,53,660</p></div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Discount</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2 text-success'>− ₹65,191</p></div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Delivery Charges</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2 text-success'>FREE</p></div>
                                <p className='text-center'>------------------------------------------------------------------</p>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Total Amount</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2 text-success'>₹4,88,469</p></div>
                                <p className='text-center'>------------------------------------------------------------------</p>
                            </div>
                            <h4 className='text-success p-2 mx-2 mb-2'>You will save ₹65,191 on this order</h4>

                        </div>
                    </div>
                </div>
            </div>
            <FooterTop />
            <FooterBody />
        </>
    )
}

export default Cart