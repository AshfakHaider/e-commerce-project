import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const { id } = useParams()
    const [productLoad, setProductLoad] = useState([]);
    const loadProduct = id => {
        console.log(id)
        fetch(`https://eco-shop-db.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setProductLoad(data);
            })
    }
    loadProduct(id);
    const increase = () => {
        
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1);
        if(count<1){
            setCount(0)
        }
    }
    return (
        <div className='single-product font'>
            <div className="container ">
                <div className="d-flex">
                    <div className="col-md-5 singlePdImg">
                        <img src={productLoad.imageUrl} alt="" />
                    </div>
                    <div className="col-md-5 single-product-info">
                        <h1>
                            {productLoad.name}
                        </h1>
                        <p className='mt-3 mb-2 sp-brand'>{productLoad.brand}</p>
                        <p className='mt-2 mb-5 sp-category'>Category:{productLoad.category}</p>
                        <h6 className='single-pd-price'>Price:{productLoad.price} taka</h6>
                        <div className="count text-dark">
                            <p>Qunatity:<FontAwesomeIcon icon={faMinus} onClick={decrease} className='minus ms-2' /> <input type="text" value={count} style={{width:'50px',border:'1px solid #80808078',borderRadius:'3px',textAlign:'center'}} /> <FontAwesomeIcon icon={faPlus} onClick={increase} className='plus' /> </p>
                        </div>
                        <button className='shopBtn mt-4 '>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SingleProduct;