import React, { useContext } from 'react';
import CartItem from './CartItem';
import {CartContext} from '../../Context/Cart/CartContext';

const CartItems = () => {

    const { cartItems } = useContext(CartContext);
//console.log(cartItems);

    return ( 
        <div>
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product._id} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartItems;
