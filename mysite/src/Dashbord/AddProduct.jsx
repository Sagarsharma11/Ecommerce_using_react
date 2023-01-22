import React,{useState,useEffect} from 'react'
import Menu from './Menu'
import TopHeader from './TopHeader'
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({
        productname:"",
        productimage:"",
        productprice:"",
        productoffer:"",
        productdec:"",
        productseller:""
    })
    useEffect(() => {
        console.log("data has been sent")
    }, [product])
   
    const onSubmit = async(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('productname',product.productname)
        formdata.append('productimage',product.productimage,product.productimage.name)
        formdata.append('productprice',product.productprice)
        formdata.append('productoffer',product.productoffer)
        formdata.append('productdec',product.productdec)
        formdata.append('productseller',product.productseller)
         axios({
            method: 'post',
            url: 'http://localhost:5000/admin/product',
            data:formdata
          }).then(e=>console.log("success", e.status===200?alert("success"):alert("not success")));
        setProduct({
            productname:"",
            productprice:"",
            productoffer:"",
            productdec:"",
            productseller:""
        })
    }
    const onChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
        console.log()
    }
    const onChangeImage=(e)=>{
        console.log("aaa")
        setProduct({...product,productimage:e.target.files[0]})
        console.log(e.target.files[0])
    }
    return (
        <>
            <div className="main-wrapper">
                <TopHeader />
                <Menu />
                <div className="main-wrapper">
                    <div>
                        <div className="page-wrapper">
                            <div className="content">
                                <div className="row">
                                    <form onSubmit={onSubmit} className='col-sm-8 mx-auto'>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                                            <input value={product.productname} onChange={onChange} type="text" className="form-control" name="productname" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Product Image</label>
                                            <input defaultValue={product.productimage} onChange={onChangeImage} type="file" className="form-control" name="productimage" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Product Price</label>
                                            <input value={product.productprice} onChange={onChange} type="text" className="form-control" name="productprice" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Product Offer</label>
                                            <input value={product.productoffer} onChange={onChange} type="text" className="form-control" name="productoffer" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Product description</label>
                                            <input value={product.productdec} onChange={onChange} type="text" className="form-control" name="productdec" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Product Seller</label>
                                            <input value={product.productseller} onChange={onChange} type="text" className="form-control" name="productseller" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <button type="submit" className="btn btn-success">Add Product</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct