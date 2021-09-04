import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Hero from '../Hero';
import Display from './Display';
import Home from '../views/Home';

export const SidebarData = [
    {
        title: 'Home',
        path: '/records',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/AboutUs',
        icon: <BsIcons.BsPeopleFill />,
        cName: 'nav-text'
    },
    {
        title: 'Records',
        path: '/Display',
        icon: <RiIcons.RiBook3Line />,
        cName: 'nav-text'
    },
    {
        title: 'Detection',
        path: '/Home',
        icon: <GiIcons.GiMagnifyingGlass />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/ContactUs',
        icon: <RiIcons.RiContactsBook2Line />,
        cName: 'nav-text'
    },
]