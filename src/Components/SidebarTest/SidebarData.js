import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Overview',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Orders',
        path: '/orders',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Products',
        path: '/allProducts',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Add Products',
    // path: '/reports',
    icon: <IoIcons.IoMdAddCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Grocary Product',
        path: '/addProduct/addGrocary',
        icon: <IoIcons.IoMdAddCircleOutline />,
        cName: 'sub-nav'
      },
      {
        title: 'Fashion Products ',
        path: '/addProduct/addFashion',
        icon: <IoIcons.IoMdAddCircleOutline />,
        cName: 'sub-nav'
      },
      {
        title: 'Food Products',
        path: '/addProduct/addFood',
        icon: <IoIcons.IoMdAddCircleOutline />
      },
      {
        title: 'Top Products',
        path: '/addProduct/topProduct',
        icon: <IoIcons.IoMdAddCircleOutline />
      }

    ]
  },
  {
    title: 'Products',
    // path: '/allProducts',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Grocary Products',
        path: '/allProducts/grocary',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Fashion Product',
        path: '/allProducts/fashion',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Food Product',
        path: '/allProducts/food',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Add Review',
    path: '/addReview',
    icon: <IoIcons.IoMdStar />
  },
  {
    title: 'All Reviews',
    path: '/allReview',
    icon: <IoIcons.IoMdStar />
  },
  {
    title: 'Messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
