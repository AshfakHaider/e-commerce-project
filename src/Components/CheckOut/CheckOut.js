import React from 'react';
import './CheckOut.css';
import { useForm } from "react-hook-form";


const CheckOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

    };


    return (
        <div className="checkout container-fluid mt-3 font">
            <h3 className='mb-3'>Checkout & Confirm Your Order </h3>
            <h6 className='coupon text-white'>Have a coupon?<a href="#" className='text-white'> Click Here to check if you have any!!!</a></h6>
            <div className="billing">
                <h3 style={{ marginTop: '30px', marginLeft: '30px' }}>Billing Details</h3>
                <div className="line"></div>
                <div className="checkOutContent m-auto">
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit(onSubmit)} >
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
                                <div>
                                    <button type='submit' className='submitBtn'>Submit</button>
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
                                
                                    <h6>Product</h6>
                                    <p>T-shirt</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Price</h6>
                                    <p>250 tk</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="col-md-8">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-md-4">
                                    <p>280 tk</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="col-md-8">
                                    <h6>Shipping</h6>
                                </div>
                                <div className="col-md-4">
                                    <h6>30tk</h6>
                                </div>
                            </div>
                             <br/>
                             <div className="line"></div>
                            <div className="d-flex">
                                <div className="col-md-8">
                                    <h4>Grand Total</h4>
                                </div>
                                <div className="col-md-4">
                                    <h5>280 tk</h5>
                                </div>
                            </div>
                        </div>
                        <div className="submitBtn text-center text-bold mt-5" style={{cursor:'pointer'}}>Place Your Order</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;