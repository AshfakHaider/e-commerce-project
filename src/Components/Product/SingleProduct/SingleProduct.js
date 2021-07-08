import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Navbar/Navbar'
import SimilarProduct from './SimilarProduct';
import Footer from '../../Footer/Footer';

const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const [similar, setSimilar] = useState([]);

    const { id } = useParams()
    const [productLoad, setProductLoad] = useState([]);
    // const loadProduct = id => {
    //     //console.log(id)
    //     fetch(`https://eco-shop-db.herokuapp.com/product/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             //console.log(data)
    //             setProductLoad(data);
    //             loadSimilar()
    //         })
    // }
    //loadProduct(id);
    const increase = () => {

        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1);
        if (count < 1) {
            setCount(0)
        }
    }
    // console.log(productLoad.category)


    // JSON.stringify(s).replace(/\\"/g, '"')
    
    
    const loadSimilar = () => {
        const pdCategory = productLoad.category
        if (pdCategory === "Sugar") {
            fetch('https://eco-shop-db.herokuapp.com/category/sugar')
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    setSimilar(data);
                })
        }
        if (pdCategory === "Hand Sanitizer") {
            fetch('https://eco-shop-db.herokuapp.com/category/sanitizer')
                .then(res => res.json())
                .then(data => {
                   // console.log(data);
                    setSimilar(data);
                })
        }
        if (pdCategory === "Disinfectant Spray") {
            fetch('https://eco-shop-db.herokuapp.com/category/spray')
                .then(res => res.json())
                .then(data => {
                  //  console.log(data);
                    setSimilar(data);
                })
        }
        if (pdCategory === "Hand Wash") {
            fetch('https://eco-shop-db.herokuapp.com/category/wash')
                .then(res => res.json())
                .then(data => {
                   // console.log(data);
                    setSimilar(data);
                })
        }
        if (pdCategory === "Baby Diaper") {
            fetch('https://eco-shop-db.herokuapp.com/category/diaper')
                .then(res => res.json())
                .then(data => {
                   // console.log(data);
                    setSimilar(data);
                })
        }
        if (pdCategory === "Body Spray") {
            fetch('https://eco-shop-db.herokuapp.com/category/bodySpray')
                .then(res => res.json())
                .then(data => {
                   // console.log(data);
                    setSimilar(data);
                })
        }

    }
    
  
    useEffect(()=>{
        
        fetch(`https://eco-shop-db.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setProductLoad(data);
            ;
        })
    },loadSimilar())









    return (
        <div className='singleProductPage'>
            <Navbar />
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
            <div className="similar mt-5 font">
                <h3>You may also like</h3>
                <div className="pd">
                    <div className="w-75 row m-auto">
                        {
                            similar.map(sm => <SimilarProduct similar={sm}></SimilarProduct>)
                        }
                    </div>

                </div>
            </div>
        </div>


    );
};

export default SingleProduct;