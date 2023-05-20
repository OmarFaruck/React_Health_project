import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import img1 from '../../images/doctor.png'
import '../Welcomepage/Welcome.css'
import { NavLink } from 'react-router-dom';

const Welcome = () => {
    return (
        <section id='welcome'>
            <div className='container'>
                <Row className='align-items-center'>
                    <Col sm={6} xs={12} md={6} lg={6} xl={6} xxl={6} >
                        <div className="Health mt-3">
                            <h1>Welcome to Your Health
                                Center</h1>
                            <p>Medical abstracts describe the current conditions of a patient. Doctors routinely scan dozens or hundreds of abstracts each day as they do their pointing to the patient’s malady. In the given dataset, abstracts from 5 different conditions have been included: digestive system diseases, cardiovascular diseases, neoplasms, nervous system diseases, and general pathological conditions.</p>

                        </div>
                        <div className="text-center">
                            <NavLink to="#" className="Let mx-auto">Learn more</NavLink>
                        </div>

                    </Col>
                    <Col sm={6} xs={12} md={6} lg={6} xl={6} xxl={6} >
                        <img src={img1} alt="" className="img-fluid mx-auto d-block mt-3" />

                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Welcome;