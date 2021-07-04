import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home'

const TestHome = () => {
    return (
        <div className='d-flex'>
            <Sidebar/>
            <Home/>
        </div>
    );
};

export default TestHome;