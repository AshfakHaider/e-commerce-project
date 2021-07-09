import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';
import HeaderContent from '../HeaderContent/HeaderContent';
import Category from '../Category/Category';
import Tutorial from '../Tutorial/Tutorial';
import Product from '../Product/Product';
import About from '../About/About'
import Contact from '../Contact/Contact'
import SliderReview from '../Testimonial/SliderReview/SliderReview';



const Home = () => {
    return (
        <div className="home font m-auto">
         <Header/>
         <HeaderContent/>
         <Category/>
         <Product/>
         <Tutorial/>
         <SliderReview/>
         {/* <Testimonial/> */}
         <About/>
         <Contact/>

        </div>
    );
};

export default Home;