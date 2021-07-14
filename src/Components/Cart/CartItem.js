import { useContext } from "react";
import "./CartItem.css";
import formatCurrency from "format-currency";
import CartContext from '../../Context/Cart/CartContext'


const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <li className='CartItem__item'>
      <img src={item.imageUrl} alt='' />
      <div>
        {item.name} {formatCurrency(`${item.price}`)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
