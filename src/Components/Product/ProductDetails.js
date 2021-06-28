import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({product}) => {
    const {name,image,quantity,price} = product;
    return (
        <div className="col-md-3 justify-content-center pdCard">
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
                    <div className="cart">
                        <h6>Add To Cart</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;