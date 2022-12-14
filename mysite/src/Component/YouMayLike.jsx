import React from 'react'
import './css/Youmaylike.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function YouMayLike() {
  return (
    <>
    <div className='container Youmaylike my-5'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>
                   You May Like
                </h1>
            </div>
        </div>
        <div className='row'>
            <OwlCarousel className='owl-theme' loop margin={10} nav>
                <div className='item'>
                    <img src={require('./image/youmaylike1 (1).jpg')} className="d-block w-80" alt="..." />
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
                    <img src={require('./image/youmaylike1 (6).jpg')} className="d-block w-80" alt="..." />
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
                    <img src={require('./image/youmaylike1 (7).jpg')} className="d-block w-80" alt="..." />
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
                    <img src={require('./image/youmaylike1 (8).jpg')} className="d-block w-80" alt="..." />
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
                    <img src={require('./image/youmaylike1 (9).jpg')} className="d-block w-80" alt="..." />
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

export default YouMayLike