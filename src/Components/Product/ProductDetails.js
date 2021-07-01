import React from 'react';
import './ProductDetails.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product }) => {
    const { name, image, quantity, price } = product;
    return (
        <div className='col-md-3 col-sm-6 col-xs-12 justify-content-center'>
            <div className=" pdCard">
                <div className="pdImg">
                    <img src={image} alt="" className='w-100' />
                </div>
                <div className="pd-info">
                    <h6>{name}</h6>
                    <span>{quantity} pcs</span>
                    <div className="d-flex justify-content-lg-between pd-price">
                        <div className="price">
                            <h6>{price}</h6>
                        </div>
                        <div className="cart d-flex">
                           
                            <button className='cartBtn'> <FontAwesomeIcon icon={faShoppingCart} className='cartIcon' /> Cart</button>
                        </div>
                    </div>
                </div>
                <div className="overlay-text">
                    <h2>Add To bag</h2>

                </div>
            </div>

        </div>
    );
};

export default ProductDetails;