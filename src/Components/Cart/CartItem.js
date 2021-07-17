import React, { useContext } from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatNumber } from './utils';


const CartItem = ({ product }) => {
    console.log(product);
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <div className="row no-gutters py-2 cart-items">
            <div className="col-sm-2 p-2">
                <img
                    alt={product.name}
                    src={product.imageUrl} className="w-100 d-block" />
            </div>

        
                <div className="col-sm-4 ">
                    <h4 className="mb-2 mt-md-5 mt-3">{product.name}</h4>
                    <h6 className="mb-1  text-danger mt-0">Price: {formatNumber(product.price)} </h6>

                </div>
            
            <div className="col-sm-2  text-center ">
                <h5 className="mb-0 mt-md-5 mt-0">Quantity: <span className='text-success'> {product.quantity}</span> </h5>
            </div>

            <div className="col-sm-4 mt-md-5 mt-2 inc_dec_btn">
                <button
                    onClick={() => increase(product._id)}
                    className="btn btn-primary btn-sm mr-2 mb-1">
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>

                {
                    product.quantity > 1 &&
                    <button
                        onClick={() => decrease(product._id)}
                        className="btn btn-danger btn-sm mb-1">
                        <FontAwesomeIcon icon={faMinusCircle} />

                    </button>
                }

                {
                    product.quantity === 1 &&
                    <button
                        onClick={() => removeProduct(product._id)}
                        className="btn btn-danger btn-sm mb-1">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                }

            </div>
        </div>
    );
}

export default CartItem;