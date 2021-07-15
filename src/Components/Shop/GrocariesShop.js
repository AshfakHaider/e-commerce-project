import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router';
import './GrocaryShop.css'
import GrocaryDetails from './GrocaryDetails';

const GrocariesShop = () => {
    const [product,setProduct] =  useState([]);
  
    useEffect(() => {
        fetch(`https://eco-shop-db.herokuapp.com/search?query=grocary`)
            .then(res => res.json())
            .then(data => {
              //  console.log(data);
                setProduct(data);
            })
    }, [])
    
 
    return (
        <div className="shop-grocaries font">
            <div className="banner-grocary">
                <div className="banner-content">
                    <h1 className='text-center'>Grocary Items</h1>
                    <p className='text-center text-black p-3 font-weight-lighter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quis natus saepe, debitis omnis dolore tempora labore deleniti obcaecati est exercitationem veniam quia maiores delectus culpa consectetur quidem reiciendis magni.</p>
                </div>
            </div>
            <div className="d-flex justify-content-center pd">
                <div className="w-75 row">
                    {
                        product.map(pd => <GrocaryDetails
                            key={pd.id} product={pd}
                        />)
                    }

                </div>

            </div>

        </div>
    );
};

export default GrocariesShop;