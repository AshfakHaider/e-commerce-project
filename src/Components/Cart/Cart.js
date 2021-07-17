import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Cart/CartContext';
import CartItems from './CartItems';
import { formatNumber } from './utils';
import './Cart.css'

const Cart = () => {

    const { total, cartItems, itemCount, clearCart } = useContext(CartContext);

    return (
        <div title="Cart" description="This is the Cart page" className='cart font' >
            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                   
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3 m-auto">
                        {
                            cartItems.length > 0 ?
                                <CartItems /> :
                                <div className="p-3 text-center text-muted">
                                    Your cart is empty
                                </div>
                        }

                    </div>
                    <div className='text-center'>
                        <button type="button" className="submitBtn" onClick={clearCart}>CLear Cart Items</button>

                    </div>

                    {
                        cartItems.length > 0 &&
                        <div className="col-sm-3 col-md-6 col-lg-6 p-3 mt-5">
                            <div className="card card-body">
                                <h1 className='text-center'>Order Details</h1>
                                <h6 className="mb-1 mt-2">Total Items</h6>
                                <h4 className=" mb-4 mt-1 txt-right text-danger">{itemCount}</h4>
                                <h6 className="mb-2 mt-1">Total Payment</h6>
                                <h3 className=" mt-1 txt-right text-danger">{formatNumber(total)} Tk</h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <Link to='/checkOut' >
                                        <button type="button" className="submitBtn mb-2">Checkout & Place Your Order</button>
                                    </Link>


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
