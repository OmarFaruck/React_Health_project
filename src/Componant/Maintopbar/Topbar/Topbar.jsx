import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Contactbar from '../Contactbar/Contactbar';
import { FaFacebookF,FaTwitter,FaLocationArrow,FaLinkedinIn } from "react-icons/fa";
import '../Topbar/Topbar.css'
const Topbar = () => {
    return (
        <Container>
            <Row>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                    <Contactbar/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className='social_icon'>
                      <FaFacebookF/>
                      <FaTwitter/>
                      <FaLocationArrow/>
                      <FaLinkedinIn/>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Topbar;