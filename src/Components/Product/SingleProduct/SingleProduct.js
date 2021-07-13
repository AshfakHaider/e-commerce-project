import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Navbar/Navbar'
import SimilarProduct from './SimilarProduct';
import Footer from '../../Footer/Footer';
import { useCallback } from 'react';

const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const [similar, setSimilar] = useState([]);

    const { id } = useParams()
    const [productLoad, setProductLoad] = useState([]);
    const increase = () => {

        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1);
        if (count < 1) {
            setCount(0)
        }
    }

    const url = `https://eco-shop-db.herokuapp.com/search?query=${productLoad.category}`
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
                            <img src={productLoad.imageUrl} alt="" />
                        </div>
                        <div className="col-md-5 single-product-info">
                            <h1>
                                {productLoad.name}
                            </h1>
                            <p className='mt-3 mb-2 sp-brand'>{productLoad.brand}</p>
                            <p className=' sp-category'>Category:{productLoad.category}</p>
                            <h6 className='single-pd-price'>Price:{productLoad.price} taka</h6>
                            <div className="count text-dark">
                                <p>Qunatity:<FontAwesomeIcon icon={faMinus} onClick={decrease} className='minus ms-2' /> <input type="text" value={count} style={{ width: '50px', border: '1px solid #80808078', borderRadius: '3px', textAlign: 'center' }} /> <FontAwesomeIcon icon={faPlus} onClick={increase} className='plus' /> </p>
                            </div>
                            <button className='shopBtnSp mt-4 '>
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
                                similar.map(sm => <SimilarProduct similar={sm}></SimilarProduct>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default SingleProduct;