import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllProductDetails from './AllProductDetails';
import './AllProducts.css'



const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(55)
    useEffect(() => {
        fetch('https://eco-shop-db.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data);
            })
    }, [])
    const loadMore = () => {
        setVisible((prevValue) => prevValue + 8);
    }
    return (
        <div className="font mt-4 mb-5 container-fluid">
            <h4 className='text-center'>Here's all of the products</h4>
            <div className="underline mb-4 mt-2"></div>
            <div className="allProducts d-flex justify-content-center ">

                <div className="w-75 row">
                    {
                        products.slice(0,visible).map(product => <AllProductDetails key={product._id} product={product} />)
                    }
                </div>

            </div>
            <div className="text-center">
                <button className='loadMoreBtnDash' onClick={loadMore}>Load More</button>
            </div>
        </div>
    );
};

export default AllProduct;