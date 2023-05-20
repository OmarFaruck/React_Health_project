import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card1 from '../../Mainheropage/Cardpage/Card_1';
import '../Ourdoctor/Ourdoctor'
import Card2 from '../../Mainheropage/Cardpage/Card_2';
import Card3 from '../../Mainheropage/Cardpage/Card_3';
import '../Ourdoctor/Ourdoctor.css'
const Ourdoctor = () => {
    return (
        <section id='Ourdoctor'>
            <div className="container">
                <h1>Our doctor</h1>
                <Row>
                    <Col sm={4} xs={12} md={6} lg={4} xl={4} xxl={4} >
                        <Card1/>
                    </Col>
                    <Col sm={4} xs={12} md={6} lg={4} xl={4} xxl={4} >
                    <Card2/>
                    </Col>
                    <Col sm={4} xs={12} md={6} lg={4} xl={4} xxl={4} >
                    <Card3/>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col sm={4} xs={12} md={6} lg={4} xl={4} xxl={4} >
                        <Card1/>
                    </Col>
                    <Col sm={4} xs={12} md={6} lg={4} xl={4} xxl={4} >
                    <Card2/>
                    </Col>
                    <Col sm={4} xs={12} md={6} lg={4} xl={4} xxl={4} >
                    <Card3/>
                    </Col>
                </Row>
               
                
            </div>
        </section>
    );
};

export default Ourdoctor;