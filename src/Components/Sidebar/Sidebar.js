import React, { useState } from 'react';
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
import { FaAppleAlt, FaStar, FaSun, FaFish, FaBaby, FaHome, FaTachometerAlt, FaCar } from 'react-icons/fa';
//import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
//import { RiPencilLine } from "react-icons/ri";
//import { BiCog } from "react-icons/bi";
import { useMediaQuery } from 'react-responsive'
import './Sidebar.css'
import MediaQuery from 'react-responsive'
import { set } from 'react-hook-form';



const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(true);
    const menuIconClick = () => {

        //menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        setMenuCollapse(!menuCollapse)

    };
    const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
    });

    const isTabletDevice = useMediaQuery({
        query: "(min-device-width: 768px)",
    });

    const isLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });
    
    const responsive = () =>{
        if(isMobileDevice){
            setMenuCollapse(true)
        }
    }

  

    return (
        <>
            <div id="sidebar">

                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<FaStar />}>Popular</MenuItem>
                            <MenuItem icon={<FaSun />}>Summer Collection</MenuItem>
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

    );
};

export default Sidebar;