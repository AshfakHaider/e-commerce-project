import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Navbar/Navbar'
import SimilarProduct from './SimilarProduct';
import Footer from '../../Footer/Footer';
import { useCallback } from 'react';
import {CartContext} from '../../../Context/Cart/CartContext';

const SingleProduct = () => {
    const{addProduct} = useContext(CartContext)
    const [count, setCount] = useState(1);
    const [similar, setSimilar] = useState([]);

    const { id } = useParams()
    const [product, setProductLoad] = useState([]);
    const increase = () => {

        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1);
        if (count < 1) {
            setCount(0)
        }
    }

    const url = `https://eco-shop-db.herokuapp.com/search?query=${product.subCategory}`
    const loadSimilar = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSimilar(data);
                console.log(data)
            })
    }


    const refreshPage = () => {
        window.location.reload();
    }


    useEffect(() => {
        fetch(`https://eco-shop-db.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProductLoad(data);

            })
    }, [])

    loadSimilar();


    return (
        <div className='singleProductPage'>

            <div className='single-product container-fluid font'>
                <div className="">
                    <div className="sp">
                        <div className="col-md-4 singlePdImg">
                            <img src={product.imageUrl} alt="" />
                        </div>
                        <div className="col-md-5 single-product-info">
                            <h1>
                                {product.name}
                            </h1>
                            <p className='mt-3 mb-2 sp-brand'>{product.brand}</p>
                            <p className=' sp-category'>Category:{product.category}</p>
                            <h6 className='single-pd-price'>Price:{product.price} taka</h6>
                          
                            <button className='shopBtnSp mt-4 ' onClick={()=>addProduct(product)} >
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="similar container-fluid mt-5 font">
                <h3>You may also like</h3>
                <div className="">
                    <div className="pd">
                        <div className="w-75 row m-auto ">
                            {
                                similar.map(sm => <SimilarProduct product={sm}></SimilarProduct>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default SingleProduct;