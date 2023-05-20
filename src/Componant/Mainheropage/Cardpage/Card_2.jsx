import React from 'react';
import card3 from '../../images/doctors/doctor_3.jpg'
import { NavLink } from 'react-router-dom'
import { FaPhoneSquareAlt, FaFacebookSquare } from "react-icons/fa";
import '../Cardpage/Card.css'

const Card_2 = () => {
    return (
        <section id='main_card'>
            <div className="container">
                <div className='card mx-auto'>
                    <div className="img_top">
                        <img src={card3} alt="" className="img-fluid mx-auto d-block" />
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

export default Card_2;