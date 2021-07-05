import React from 'react';
import './Dashboard.css'
import Sidebar from '../../Sidebar/Sidebar'
import SidebarDash from '../SidebarDash/SidebarDash';
import AddProduct from '../AddProduct/AddProduct'
const Dashboard = () => {
    return (
        <div className='dashboard d-flex'>
            <div className="dashboard-menu">
                <SidebarDash/>
            </div>
            <div className="dashboard-home col-md-9">
                <h3 className='mt-5 text-center'>Welcome to the dashboard folk</h3>
               
            </div>
        </div>
    );
};

export default Dashboard;