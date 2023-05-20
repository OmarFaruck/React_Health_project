import React from 'react';
import '../Heropage/Heropage.css'
import { NavLink } from 'react-router-dom';
import Cardage from '../Maincardpage/Cardage/Cardage';
import Welcome from '../Welcomepage/Welcome';
import Doctor from '../Doctorpage/Doctor';
import Newspage from '../Newspage/Newspage';
import Appointment from '../Appointmentpage/Appointment';

const Heropage = () => {
    return (
        <>
            <div className="page-hero bg-image overlay-dark" style={{
                backgroundImage: `url("http://127.0.0.1:5500/assets/img/bg_image_1.jpg")`,
                backgroundColor:"black",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="hero-section">
                    <div className="container text-center">
                        <span className="subhead">Let's make your life happier</span>
                        <h1 className="display-4">Healthy Living</h1>
                        <NavLink to="#" className="Let">Let's Consult</NavLink>
                    </div>
                </div>
            </div>

            <Cardage/>
            <Welcome/>
            <Doctor/>
            <Newspage/>
            <Appointment/>

        </>
    );
};

export default Heropage;