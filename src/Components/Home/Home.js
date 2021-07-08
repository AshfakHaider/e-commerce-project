import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header';
import HeaderContent from '../HeaderContent/HeaderContent';
import Category from '../Category/Category';
import Tutorial from '../Tutorial/Tutorial';
import Testimonial from '../Testimonial/Testimonial';
import Product from '../Product/Product';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Sidebar from '../Sidebar/Sidebar'
import Test from '../Test/Test';



const Home = () => {
    return (
        <div className="home font m-auto">
         <Header/>
         <HeaderContent/>
         <Category/>
         <Product/>
         <Tutorial/>
         <Testimonial/>
         <About/>
         <Contact/>

        </div>
    );
};

export default Home;