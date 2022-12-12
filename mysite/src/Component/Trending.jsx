import React from 'react'
import './css/Trending.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Trending() {

    return (
        <>
            <div className='container Trending my-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1>
                            Trending This Week
                        </h1>
                    </div>
                    <div className='col-md-4 '>
                        <h4>Men</h4>
                        <h4>Women</h4>
                        <h4>Baby</h4>
                        <h4>Fashion</h4>
                    </div>
                </div>
                <div className='row'>
                    <OwlCarousel className='owl-theme' loop margin={10} nav>
                        <div className='item'>
                            <img src={require('./image/trend1.jpg')} className="d-block w-100" alt="..." />
                            <div className='my-3'>
                                <p className='text-center'>Cashmera Tank + Bag</p>
                                <p className='text-center'>$98.00 <span className='text-decoration-line-through mx-3'>$103.00</span> </p>
                            </div>
                            <div className='add-to-cart'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-cart-plus text-primary "></i>
                                </div>
                                <div>
                                    <i className="fa-sharp fa-solid fa-bag-shopping text-success"></i>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={require('./image/trend2.jpg')} className="d-block w-100" alt="..." />
                            <div className='my-3'>
                                <p className='text-center'>Cashmera Tank + Bag</p>
                                <p className='text-center'>$98.00 <span className='text-decoration-line-through mx-3'>$103.00</span> </p>
                            </div>
                            <div className='add-to-cart'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-cart-plus text-primary "></i>
                                </div>
                                <div>
                                    <i className="fa-sharp fa-solid fa-bag-shopping text-success"></i>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={require('./image/trend3.jpg')} className="d-block w-100" alt="..." />
                            <div className='my-3'>
                                <p className='text-center'>Cashmera Tank + Bag</p>
                                <p className='text-center'>$98.00 <span className='text-decoration-line-through mx-3'>$103.00</span> </p>
                            </div>
                            <div className='add-to-cart'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-cart-plus text-primary "></i>
                                </div>
                                <div>
                                    <i className="fa-sharp fa-solid fa-bag-shopping text-success"></i>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={require('./image/trend4.jpg')} className="d-block w-100" alt="..." />
                            <div className='my-3'>
                                <p className='text-center'>Cashmera Tank + Bag</p>
                                <p className='text-center'>$98.00 <span className='text-decoration-line-through mx-3'>$103.00</span> </p>
                            </div>
                            <div className='add-to-cart'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-cart-plus text-primary "></i>
                                </div>
                                <div>
                                    <i className="fa-sharp fa-solid fa-bag-shopping text-success"></i>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={require('./image/trend5.jpg')} className="d-block w-100" alt="..." />
                            <div className='my-3'>
                                <p className='text-center'>Cashmera Tank + Bag</p>
                                <p className='text-center'>$98.00 <span className='text-decoration-line-through mx-3'>$103.00</span> </p>
                            </div>
                            <div className='add-to-cart'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-cart-plus text-primary "></i>
                                </div>
                                <div>
                                    <i className="fa-sharp fa-solid fa-bag-shopping text-success"></i>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </div>
        </>
    )
}

export default Trending