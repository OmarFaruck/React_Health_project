import React from 'react';
import card4 from '../../images/doctors/doctor_1.jpg'
import { NavLink } from 'react-router-dom'
import { FaPhoneSquareAlt, FaFacebookSquare } from "react-icons/fa";
import '../Cardpage/Card.css'

const Card_3 = () => {
    return (
        <section id='main_card'>
        <div className="container">
            <div className='card mx-auto'>
                <div className="img_top">
                    <img src={card4} alt="" className="img-fluid mx-auto d-block" />
                    <div className="overlay">
                        <NavLink className='nav-link'><FaPhoneSquareAlt /></NavLink>
                        <NavLink className='nav-link'><FaFacebookSquare /></NavLink>
                    </div>
                </div>
            </div>
            <div className="card_text">
                <h5>Dr. Alexa Melvin</h5>
                <h4>Dental</h4>
            </div>
        </div>
    </section>
    );
};

export default Card_3;