import React,{useContext} from 'react';
import './SimilarProduct.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import {CartContext} from '../../../Context/Cart/CartContext'

const SimilarProduct =({ product }) => {
    const {addProduct} = useContext(CartContext)

    const { _id, name, imageUrl, piece, price } = product;
    const history = useHistory();
    const handleProduct = (id) => {
        //console.log(id,name);
      window.location.assign(`/product/${id}`);
        refreshPage();
    }
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pdCard">
                <div className="pdImg" onClick={()=>handleProduct(_id)}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className="pd-info" >
                    <h6 onClick={()=>handleProduct(_id)}>{name}</h6>
                    <span>{piece} pcs available</span>
                    <div className="d-flex justify-content-lg-between pd-price">
                        <div className="price">
                            <h6>{price} Tk</h6>
                        </div>
                        <div className="cart d-flex">
                            <button className='cartBtn' onClick={()=> addProduct(product)}> <FontAwesomeIcon icon={faShoppingCart} className='cartIcon' /> Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SimilarProduct;