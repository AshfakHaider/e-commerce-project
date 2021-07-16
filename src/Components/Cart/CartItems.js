import { useContext } from "react";
import "./CartItem.css";
import formatCurrency from "format-currency";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="cartItem">
     <li className='CartItem__item font'>
        <img src={item.imageUrl} alt='' />
        <div>
          <div className='item_name p-2'>
            <b>{item.name}</b>
          </div>
          <span className='text-danger'>Price</span>: {formatCurrency(`${item.price}`)} Tk
        </div>
        <button className='submitBtn_cart' onClick={() => removeItem(item._id)}>
          Remove
        </button>
      </li>

    </div>
  );
};

export default CartItem;
