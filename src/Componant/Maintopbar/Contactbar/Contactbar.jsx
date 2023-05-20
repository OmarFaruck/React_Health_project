import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import { FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import '../Contactbar/Contactbar.css'
const Contactbar = () => {
    return (
        <Row className='text-center'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12'>
                <div className='d-flex contact_side'>
                    <FaPhoneAlt />
                    <p>+012344556666</p>
                </div> 
            </div>
            {/* <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-'>
                    <span className="divider">|</span>
                </div> */}
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12'>
        
                <div className='d-flex contact_side'>
                    <FaEnvelope />
                    <p>omarfaruck1994@gmail.com</p>
                </div>
               
            </div>
        </Row>
    );
};

export default Contactbar;