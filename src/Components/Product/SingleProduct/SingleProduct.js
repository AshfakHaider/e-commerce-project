import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';


const SingleProduct = () => {
    const {id} = useParams()
    const[productLoad,setProductLoad] = useState([]);
    const loadProduct = id =>{
        console.log(id)
        fetch(`https://eco-shop-db.herokuapp.com/product/${id}`)
        .then(res=> res.json())
        .then(data=>{
            //console.log(data)
            setProductLoad(data);
        })
    }
    loadProduct(id);
    return (
        <div className='single-product font'>
           <div className="container-fluid">
               <div className="row m-auto">
                    <div className="col-md-6">
                        <img src={productLoad.imageUrl} alt="" />
                    </div>
                    <div className="col-md-6 product-info">
                        <h1>
                            {productLoad.name}
                        </h1>
                        <p className='mt-3 mb-5'>{productLoad.brand}</p>
                        <h6>{productLoad.price} taka</h6>
                        <h6>{productLoad.category}</h6>
                        <button className='shopBtn'>
                            Add To Cart
                        </button>
                    </div>
               </div>
            </div> 
        </div>
           
       
    );
};

export default SingleProduct;