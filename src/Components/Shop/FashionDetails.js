import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import CartContext from '../../Context/Cart/CartContext';

const FashionDetails = ({product}) => {
    const { _id, name, imageUrl, piece, price } = product;
 
    const { addToCart } = useContext(CartContext)


    const handleProduct = (id) => {
        //console.log(id,name);

        //history.push(`/product/${id}`);
        //refreshPage();
        window.location.assign(`/product/${id}`)
        //  console.log('clicked')

    }
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 justify-content-center">
            <div className="pdCard">
                <div className="pdImg">
                    <img src={imageUrl} alt="" className='w-100' />
                </div>
                <div className="pd-info" >
                    <h6 onClick={() => handleProduct(_id)} >{name}</h6>
                    <span>{piece} pcs</span>
                    <div className="d-flex justify-content-lg-between pd-price">
                        <div className="price">
                            <h6>{price} Tk</h6>
                        </div>
                        <div className="cart d-flex">
                            <button className='cartBtn' onClick={() => addToCart(product)} > <FontAwesomeIcon icon={faShoppingCart} className='cartIcon' /> Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default FashionDetails;