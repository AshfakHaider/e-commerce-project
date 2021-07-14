import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../Context/Cart/CartContext'

const SearchDetails = ({product}) => {
    const {addToCart} = useContext(CartContext)

    const history=useHistory();
    const handleProduct = (id) => {
        //console.log(id,name);
        
        history.push(`/product/${id}`);
        refreshPage();    
        
    }
    const refreshPage = () =>{
        window.location.reload();
    }
    
    const {_id,name,imageUrl,price,piece} = product;
    return (
        <div className='col-md-3 col-sm-6 col-xs-12 justify-content-center'>
            <div className="pdCard">
                <div className="pdImg" onClick={()=>handleProduct(_id)} >
                    <img src={imageUrl} alt="" className='w-100' />
                </div>
                <div className="pd-info">
                    <h6 onClick={()=>handleProduct(_id)} >{name}</h6>
                    <span>{piece} pcs</span>
                    <div className="d-flex justify-content-lg-between pd-price">
                        <div className="price">
                            <h6>{price} Tk</h6>
                        </div>
                        <div className="cart d-flex">
                            <button className='cartBtn' onClick={()=>addToCart(product)}> <FontAwesomeIcon icon={faShoppingCart} className='cartIcon' /> Cart</button>
                        </div>
                    </div>
                </div>
                <div className="overlay-text">
                    <h2>Add To bag</h2>
                </div>

            </div>
        </div>
    );
};

export default SearchDetails;