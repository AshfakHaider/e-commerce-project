import React, { useContext } from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatNumber } from './utils';


const CartItem = ({product}) => {
    console.log( product);
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.imageUrl} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: { formatNumber(product.price)} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                 <button 
                 onClick={() => increase(product._id)}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                     <FontAwesomeIcon icon={faPlusCircle}/>
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product._id)}
                    className="btn btn-danger btn-sm mb-1">
                        <FontAwesomeIcon icon={faMinusCircle}/>

                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product._id)}
                    className="btn btn-danger btn-sm mb-1">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;