import React from 'react';
import './Dashboard.css'
import SidebarTest from '../../SidebarTest/SidebarTest';

const Dashboard = () => {
    
    return (
        <div className='dashboard d-flex'>
            <div className="dashboard-menu">
                <SidebarTest/>
            </div>
            <div className="dashboard-home m-auto">
                <h3 className='mt-5 text-center'>Welcome to the dashboard folk</h3>
            </div>
        </div>
    );
};

export default Dashboard;