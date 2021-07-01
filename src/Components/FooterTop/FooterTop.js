import React from 'react';
import map from '../../images/map.png';
import './FooterTop.css'

const FooterTop = () => {
    return (
        <div className="footerTop">
            <div className="container">
                <div className="row justify-content-lg-between">
                    <div className="col-md-5">
                        <img src={map} alt="" className='w-100' />
                    </div>
                    <div className="col-md-5 text-right desc ">
                        <h2 className='footerTop-title'>Dhaka</h2>
                        <h3>Total Order Placed</h3>
                        <div className="footerTop-title">2661366</div>
                        <h3>Total Savings</h3>
                        <div className="footerTop-title">৳226,216,110</div>
                        <h3>Time Saved</h3>
                        <div className="footerTop-title">1,996,024 hrs</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;