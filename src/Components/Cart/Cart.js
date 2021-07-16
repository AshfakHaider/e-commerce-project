import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/Cart/CartContext';
import CartItems from './CartItems';
import { formatNumber } from './utils';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart } = useContext(CartContext);
    
    return ( 
        <div title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartItems/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }
                        
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{ formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2">CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
     );
}
 
export default Cart;
