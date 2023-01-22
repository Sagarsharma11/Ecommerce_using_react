import React,{useEffect} from 'react'
import NavbarHeader from "./NavbarHeader";
import NavBar from "./NavBar";
import FooterTop from "./FooterTop";
import FooterBody from "./FooterBody";
import { useSelector } from 'react-redux';
import { remove } from '../store/cartSlice'
import { fetchproduct,removeMyCart } from '../store/productSlice'
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Cart() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchproduct())
    }, [])
    
    const cartitmes = useSelector(state => state.product)
    // console.log('cartitems', cartitmes)
    let totalValue = 0;
    let discoutPrice = 0;

    const removeCart = (id) =>{
        let config = {
            'Content-Type': 'Application/json',
            'auth-token': localStorage.getItem('auth-token')
        }
        axios.delete(`http://localhost:5000/user/removeitem/${id}`,
            {headers:config}
        ).then((response)=>{
            dispatch(fetchproduct())
        })
        .catch((error)=>console.log(error))
        
    }
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
                            <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                                <h4 className='text-center'>From Saved Address</h4>
                                <button className="btn btn-primary" type="button">Enter Delivery Pincode</button>
                            </div>
                        </div>
                        {
                            cartitmes.data===undefined || cartitmes.data.length === 0? '':cartitmes.data.array.map((e,i) => {
                                totalValue+=e.productoffer
                                discoutPrice+=e.productprice
                                return <>
                                    <div key={i} className='ProductDetail bg-white mt-3 mb-'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <img className='w-100' src={require(`./image/${e.productimage}`)} alt="AddToCartImage" />
                                            </div>
                                            <div className='col-md-5 p-2'>
                                                <h5>{e.productname}</h5>
                                                <p>{e.productdec}</p>
                                                <p>Seller: {e.productseller}</p>
                                               
                                                <p><s>₹{e.productprice}</s> <strong> ₹{e.productoffer}</strong> <span className='text-success'> {
                                                   Math.floor((e.productprice-e.productoffer)*100/e.productoffer)
                                                }% Off  </span>5 offers applied</p>
                                            </div>
                                            <div className='col-md-4 p-2'>
                                                <p>Delivery by Sun Jan 1 | <span className='text-success'>Free</span> <s>₹40</s></p>
                                            </div>
                                        </div>
                                        <div className='row ProductIncrement'>
                                            <div className='col-md-3'>
                                                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                                    <div className="btn-group ml-4" role="group" aria-label="First group">
                                                        <button type="button" className="btn btn-outline-secondary">+</button>
                                                        <button type="button" className="btn btn-outline-secondary">{cartitmes.data.cartobject[e._id]}</button>
                                                        <button type="button" className="btn btn-outline-secondary">-</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3 p-2 btn'><p><strong>SAVE FOR LATER</strong></p></div>
                                            <div onClick={()=>removeCart(e._id)} className='col-md-3 p-2 btn'><p><strong>REMOVE</strong></p></div>
                                        </div>
                                    </div>

                                </>
                            }) 
                        }

                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='PriceDetail bg-white mt-4 '>
                            <h4 className='p-1 ml-2 text-secondary'>PRICE DETAILS</h4><hr />
                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Price (6 items)</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2'>₹{discoutPrice}</p></div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Discount</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2 text-success'>{Math.floor(discoutPrice-totalValue)} ₹</p></div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Delivery Charges</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2 text-success'>FREE</p></div>
                                <p className='text-center'>------------------------------------------------------------------</p>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 '><p className='mx-2 p-2'>Total Amount</p></div>
                                <div className='col-md-6'><p className='mx-5 p-2 text-success'>₹{totalValue}</p></div>
                                <p className='text-center'>------------------------------------------------------------------</p>
                            </div>
                            <h4 className='text-success p-2 mx-2 mb-2'>You will save {Math.floor(discoutPrice-totalValue)}₹ on this order</h4>

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