import React, { useState } from 'react';
import { useEffect } from 'react';
import './OrderDetails.css'
import OrderDetails from './OrderDetails'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://eco-shop-db.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="orders font container-fluid ">
            <Link to='/dashboard' target="_blank"> <button className='submitBtn'><FontAwesomeIcon icon={faArrowLeft} /> Go Back To Dashboard</button></Link>

            <h1 className='text-center text-success'>Welcome to Order Page</h1>
            <h5 className='text-center'>Here's all of your orders</h5>

            <div className='order-details'>
                <div className="d-flex justify-content-center">
                    <div className="row m-auto text-center ">
                        {
                            orders.map(order => <OrderDetails order={order} key={order.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;