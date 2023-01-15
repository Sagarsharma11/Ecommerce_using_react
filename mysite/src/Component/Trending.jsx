import React, { useState, useEffect } from 'react'
import './css/Trending.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchproduct } from '../store/productSlice'

function Trending(props) {
    const dispatch = useDispatch();
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(fetchproduct())
        fetchData()
    }, [])

    const clickHandle = (e) => {
        try {
            dispatch(add(e))
            let config = {
                'Content-Type': 'Application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
            const payload = {
                product_id: e._id
            }
            fetch(
                'http://localhost:5000/user/cart', {
                method: 'POST',
                headers: config,
                body: JSON.stringify(payload)
            }
            )
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    dispatch(fetchproduct())
                });
        } catch (error) {
            console.log(error)
        }

    }

    const fetchData = (e) => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/admin/fetchProduct'
        })
            .then((response) => {
                setData(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <>
            <div className='container Trending my-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1>
                            Trending This Week
                        </h1>
                        <div>

                        </div>
                    </div>
                    <div className='col-md-4 '>
                        <h4>Men</h4>
                        <h4>Women</h4>
                        <h4>Baby</h4>
                        <h4>Fashion</h4>
                    </div>
                </div>
                <div className='row'>


                    {data.length && <OwlCarousel className='owl-theme' loop={true} margin={10} nav>
                        {data.map((e, key) => {
                            return (
                                <>
                                    <div key={key} className='item'>
                                        <img src={require(`./image/${e.productimage}`)} className="d-block w-100" alt="..." />
                                        <div className='my-3'>
                                            <p className='text-center'>{e.productname}</p>
                                            <p className='text-center'>{e.productoffer} <span className='text-decoration-line-through mx-3'>{e.productprice}</span> </p>
                                        </div>
                                        <div className='add-to-cart'>
                                            <div onClick={() => clickHandle(e)} >
                                                <i className="fa-sharp fa-solid fa-cart-plus text-primary "></i>
                                            </div>
                                            <div>
                                                <i className="fa-sharp fa-solid fa-bag-shopping text-success"></i>
                                            </div>
                                        </div>
                                    </div>

                                </>)
                        })} </OwlCarousel>
                    }

                </div>
            </div>
        </>
    )
}



export default Trending