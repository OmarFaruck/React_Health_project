import React from 'react';
import { FaFacebookSquare,FaFacebookMessenger,FaTelegram,FaPhoneSquareAlt } from "react-icons/fa";
import '../Socialicon/Social.css'
import { NavLink } from 'react-router-dom';
const Social = () => {
    return (
        <section id='social_icon'>
            <NavLink className='nav-link' to=""><FaFacebookSquare/></NavLink>
            <NavLink className='nav-link' to=""><FaFacebookMessenger/></NavLink>
            <NavLink className='nav-link' to=""><FaTelegram/></NavLink>
            <NavLink className='nav-link' to=""><FaPhoneSquareAlt/></NavLink> 
            
        </section>
    );
};

export default Social;