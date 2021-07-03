import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllProductDetails from './AllProductDetails';
import './AllProducts.css'

const AllProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setProducts(data);
        })
    },[])
    return (
      <div className="allPdDiv font mt-4 mb-5">
          <h4 className='text-center'>Here's all of the products</h4>
          <div className="underline mb-4 mt-2"></div>
           <div className="allProducts d-flex justify-content-center ">
         
         <div className="w-75 row">
              {
                  products.map(product => <AllProductDetails product ={product}/>)
              }
          </div>
        
     </div>
      </div>
    );
};

export default AllProduct;