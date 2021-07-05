import React, { useState } from 'react';
import './SidebarDash.css'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu
} from "react-pro-sidebar";

import 'react-pro-sidebar/dist/css/styles.css';
import { FaAppleAlt, FaStar, FaSun, FaFish, FaBaby, FaHome, FaTachometerAlt, FaCar, FaBars } from 'react-icons/fa';
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";


const SidebarDash = () => {


    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {

        //menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        setMenuCollapse(!menuCollapse)


    };

    return (
        <div className='d-flex'>
            {/* <h3 className='text-center'>Dashboard</h3> */}
            <>
                <div id="sidebar">

                    {/* collapsed props to change menu size using menucollapse state */}
                    <ProSidebar
                        collapsed={menuCollapse}



                    >
                        <SidebarHeader>
                            {/* <div className="logotext"> */}
                            {/* small and big change using menucollapse state */}
                            {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                        </div> */}
                            <div className="closemenu" >
                                {/* changing menu collapse icon on click */}
                                {/* {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )} */}
                                <FaBars style={{ cursor: 'pointer' }} onClick={menuIconClick} />
                            </div>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <MenuItem active={true} icon={<FiHome />}>
                                    <Link to='/' target="_blank"  className='text-dark'> Home</Link>

                                </MenuItem>
                                <MenuItem icon={<FaStar />}>
                                    <Link to='/allProducts' target="_blank" className='text-dark'> All Products</Link>

                                </MenuItem>
                                <MenuItem icon={<FaSun />}>
                                    <Link to='/addProduct' target="_blank" className='text-dark'> Add Product</Link>
                                </MenuItem>
                                <MenuItem icon={<FaSun />}>Hygine</MenuItem>
                                <SubMenu title="Fruit & Vagetables" icon={<FaAppleAlt />}>
                                    <MenuItem>Fruits</MenuItem>
                                    <MenuItem>Vagetables</MenuItem>
                                </SubMenu>
                                <SubMenu title="Meats & Fish" icon={<FaFish />}>
                                    <MenuItem>Fresh Fish</MenuItem>
                                    <MenuItem>Meat</MenuItem>
                                </SubMenu>
                                <SubMenu title="Baby Care" icon={<FaBaby />}>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu title="Petcare" icon={<FaHome />}>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu title="Home & Cleaning" icon={<FaHome />}>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu title="Office Products" icon={<FaHome />}>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu title="Beauty & Health" icon={<FaHome />}>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <SubMenu title="Home Appliances" icon={<FaTachometerAlt />}>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                                <MenuItem icon={<FaCar />}>Vehicle Essentials</MenuItem>
                            </Menu>
                        </SidebarContent>

                    </ProSidebar>
                </div>
            </>

        </div>
    );
};

export default SidebarDash;