import React from 'react';
import './SimilarProduct.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

const SimilarProduct =({ similar }) => {
    const { _id, name, imageUrl, piece, price } = similar;
    const history = useHistory();
    const handleProduct = (id) => {
        //console.log(id,name);
        history.push(`/product/${id}`);
        refreshPage();
    }
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pdCard">
                <div className="pdImg">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="pd-info" onClick={()=>handleProduct(_id)}>
                    <h6>{name}</h6>
                    <span>{piece} pcs available</span>
                    <div className="d-flex justify-content-lg-between pd-price">
                        <div className="price">
                            <h6>{price} Tk</h6>
                        </div>
                        <div className="cart d-flex">
                            <button className='cartBtn'> <FontAwesomeIcon icon={faShoppingCart} className='cartIcon' /> Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SimilarProduct;