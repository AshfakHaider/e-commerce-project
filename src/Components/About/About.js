import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faTruck, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './About.css';



const About = () => {
    return (
        <div className="about text-center">
            <div className="">
                <h2>Key Details About Us</h2>
                <div className="underline mb-5"></div>
                <div className="row m-auto justify-content-center">
                    <div className="col-md-3 box">
                        <FontAwesomeIcon icon={faMoneyBill} className='keyIcon' />
                        <p>Special Discount Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam sequi doloremque similique, vero architecto voluptas.</p>
                    </div>
                    <div className="col-md-3 box">
                        <FontAwesomeIcon icon={faPhoneAlt} className='keyIcon' />
                        <p>Special Discount Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, soluta obcaecati tenetur praesentium repellendus facere dolores optio aliquid dolorem exercitationem!</p>
                    </div>
                    <div className="col-md-3 box">
                        <FontAwesomeIcon icon={faTruck} className='keyIcon' />
                        <p>Special Discount Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, et?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;