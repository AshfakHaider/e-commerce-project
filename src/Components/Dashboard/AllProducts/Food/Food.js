import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../../Loading/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FoodDetail from './FoodDetail';

const FashionProduct = () => {
    const [products, setProducts] = useState([]);

    const [loading,setLoading]= useState(true);
    useEffect(() => {
        setLoading(true)
        fetch('https://eco-shop-db.herokuapp.com/food')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data);
                setLoading(false)
            })
    }, [])
    if (loading) {
        return (
          <div className='load-all'>
            <Loading />
          </div>
        )
      }
      const refreshPage = () => {
        window.location.reload();
    }
    return (
        <div className="font mt-4 mb-5 container-fluid">
            <Link to='/dashboard' target="_blank"> <button className='submitBtn'><FontAwesomeIcon icon={faArrowLeft}/> Go Back To Dashboard</button></Link>

            <h4 className='text-center'>Here's all of the Food  products</h4>
            <div className="underline mb-4 mt-2"></div>
            <div className="allProducts d-flex justify-content-center ">

                <div className="w-75 row">
                    {
                        products.map(product => <FoodDetail key={product._id} product={product} />)
                    }
                </div>

            </div>
           
        </div>
    );
};

export default FashionProduct;