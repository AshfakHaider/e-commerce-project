import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import CartContext from '../../Context/Cart/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {

  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  
    localStorage.setItem('cartItem',JSON.stringify(cartItems))
  
 
  return (
    <>
      {showCart && (
        <div className='cart__wrapper font p-4'>
          <div style={{ textAlign: "right" }}>
            <FontAwesomeIcon icon={faTimesCircle} onClick={showHideCart} style={{ color: 'red', cursor: 'pointer', fontSize: '25px' }} />
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4 className='mt-2 mb-3'>Your Shopping Bag is Empty</h4>
            ) : (
              <div>
                <h3 className="mb-3">
                  Your Shopping Bag
                </h3>
                <ul>
                  {cartItems.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </ul>
              </div>

            )}
          </div>
          <div className='Cart__cartTotal'>

            <div>Grand Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => parseFloat(item.price) + amount, 0)
              )} Tk
            </div>
          </div>
          <div>
            {
              cartItems.length>0?<button className="submitBtn_cart">Proceed To Check Out <FontAwesomeIcon icon={faArrowRight} className='ms-2 mt-2' /></button>: <h6 className='text-danger mt-3'>Don't Get The Product You Want? Let's Make A Search</h6>
            }

          </div>

        </div>
      )}
    </>
  );
};

export default Cart;
