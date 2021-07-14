import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Product.css'
import ProductDetails from './ProductDetails';
import Loading from '../Loading/Loading'

const Product = () => {
    const [product, setProduct] = useState([]);
    const [visible, setVisible] = useState(12);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        setLoading(true);
        fetch('https://eco-shop-db.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setProduct(data);
                setLoading(false)
            })
    }, [])
    const loadMore = () => {
        setVisible((prevValue) => prevValue + 8);
    }
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }


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

        <div className="productDiv">
            <div className="d-flex justify-content-center pd">
                <div className="w-75 row">
                    {
                        product.slice(0, visible).map(pd => <ProductDetails
                            key={pd.id} product={pd}
                        />)
                    }

                </div>

            </div>
            <div className="text-center">
                <button className='shopBtn' onClick={loadMore}>Load More</button>
            </div>
        </div>


    );
};

export default Product;



