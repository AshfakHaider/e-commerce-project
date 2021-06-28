import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Product.css'
import ProductDetails from './ProductDetails';

const Product = () => {
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        fetch('https://mocki.io/v1/43332677-62e0-4a3c-a797-08b1f1934d12')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProduct(data)
        })
    },[])
    return (
        // <div className='product'>
        //     <div className="">
        //         <div className="col-md-10 m-auto ">
        //              {
        //                  product.map(pd=><ProductDetails key ={pd.id} product ={pd}></ProductDetails>)
        //              }
        //         </div>
        //     </div>
        // </div>
        <div className="d-flex justify-content-center ">
            <div className="w-75 row">
                {
                    product.map(pd=><ProductDetails key={pd.id} product={pd}/>)
                }
            </div>
        </div>

    );
};

export default Product;



