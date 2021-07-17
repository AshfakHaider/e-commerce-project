import React, { useContext } from 'react';
import './CheckOut.css';
import { useForm } from "react-hook-form";
import {CartContext} from '../../Context/Cart/CartContext'


const CheckOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { total, cartItems, itemCount, checkout, handleCheckout } = useContext(CartContext);
    console.log(cartItems);
    const onSubmit = data => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const district = document.getElementById('district').value;
        const city = document.getElementById('cityName').value;
        const postCode = document.getElementById('postCode').value;
        const phoneNum = document.getElementById('phoneNumber').value;
        const email = document.getElementById('email').value;
        

        const eventData = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            district: district,
            city:city,
            postCode:postCode,
            phoneNumber: phoneNum,
            email: email,
            products: cartItems,
            total: total,
            itemCount: itemCount,
        }
        console.log(eventData);
        const url = `https://eco-shop-db.herokuapp.com/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res)
                handleCheckout();
                window.location.assign(`/success`)
               
            });

    };

    return (
        <div className="checkout container-fluid font">
            <h3 className='mb-3'>Checkout & Confirm Your Order </h3>
            <h6 className='coupon text-white'>Have a coupon?<a href="#" className='text-white'> Click Here to check if you have any!!!</a></h6>
            <div className="billing">
                <h3 style={{ marginTop: '30px', marginLeft: '30px' }}>Billing Details</h3>
                <div className="line"></div>
                <div className="checkOutContent m-auto">
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit(onSubmit)}  >
                         <div>
                         <div className="nameDiv">
                                <div className="col-md-6 col-sm-8  col-xs-12">
                                    <h6 className='label mt-md-0 mt-3'>Enter Your First Name</h6>
                                    <input type="text" name="first name" placeholder='Enter First Name' id='firstName' className='form-control' required />
                                </div>
                                <div className="col-md-6 col-sm-8 col-xs-12 mt-md-0 mt-3">
                                    <h6 className='label'>Enter Your Last Name </h6>
                                    <input type='text' name='last name' placeholder='Enter Last Name' id='lastName' className='form-control' required />
                                </div>
                            </div>
                            <br />
                            <div className="col-md-12">
                                <h6 className='label'>Enter Your Street Address </h6>
                                <input type='text' name='address' placeholder='Enter Your Address' id='address' className='form-control' required />
                                <br />
                                <h6 className='label'>Enter Your District</h6>
                                <select name="district" id="district" className='form-control-range' >
                                    <option value="city">Select District</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">Chittagong</option>
                                    <option value="comilla">Comilla</option>
                                    <option value="sylhet">Sylhet</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="rangpur">Rangpur</option>
                                </select>
                                <br />
                                <h6 className='label'>Enter Your City</h6>
                                <input type='text' name='city' placeholder='Enter Your City Name' id='cityName' className='form-control' />
                                <br />
                                <h6 className='label'>Enter Your Post Code</h6>
                                <input type='number' name='post code' placeholder='Enter Post Code' id='postCode' className='form-control' />
                                <br />
                                <h6 className='label'>Enter Your Phone Number</h6>
                                <input type="number" name="phone" placeholder='Enter Your Phone Number' id="phoneNumber" className='form-control form-form-control-color' required />
                                <br />
                                <h6 className='label'>Enter Your E-mail Address</h6>
                                <input type="email" name="email" id="email" placeholder="Enter Your Email address" className='form-control' required />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                         </div>
                             
                                <div>
                                    <button  type='submit' className='submitCheckOutBtn text-center text-bold'>Place Your Order</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-4 ms-md-5 ms-0">
                        <h3>Your Order</h3>
                        <div className="line"></div>
                        <div className="order-box">
                            <div className="d-flex">
                                <div className="col-md-8">
                                
                                    <h4 className='text-success'>Total Products</h4>
                                  
                                </div>
                                <div className="col-md-4">
                                    <b className='text-danger'>{itemCount} Products</b>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="col-md-8">
                                    <h5 className='text-success'>Price</h5>
                                </div>
                                <div className="col-md-4">
                                    <b className='text-danger'>{total} Tk</b>
                                </div>
                            </div>
                            {/* <div className="d-flex">
                                <div className="col-md-8">
                                    <h6>Delivery</h6>
                                </div>
                                <div className="col-md-4">
                                    <h6>30tk</h6>
                                </div>
                            </div> */}
                             <br/>
                             <div className="line"></div>
                            <div className="d-flex">
                                <div className="col-md-8">
                                    <h4 className='text-success'>Grand Total</h4>
                                </div>
                                <div className="col-md-4">
                                    <b className='text-danger'>{total} Tk</b>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;