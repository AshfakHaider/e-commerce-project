import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';
import HeaderContent from '../HeaderContent/HeaderContent';
import Category from '../Category/Category';
import Tutorial from '../Tutorial/Tutorial';
import Testimonial from '../Testimonial/Testimonial';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className="home">
         <Navbar />
         <Header/>
         <HeaderContent/>
         <Category/>
         <Product/>
         <Tutorial/>
         <Testimonial/>
        
        </div>
    );
};

export default Home;