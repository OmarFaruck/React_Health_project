import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import '../Welcometext/Welcome.css'
const Welcome = () => {
    return (
        <section id='welcome_text'>
            <div className="text-center">
                <div className="container">
                    <Row>
                        <Col sm={2} xs={12} md={2} lg={2} xl={2} xxl={2} ></Col>
                        <Col sm={8} xs={12} md={8} lg={8} xl={8} xxl={8} >
                            <h1>Welcome to Your Health Center</h1>
                            <p>Expedita iusto sunt beatae esse id nihil voluptates magni, excepturi distinctio impedit illo, incidunt iure facilis atque, inventore reprehenderit quidem aliquid recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod ad sequi atque accusamus deleniti placeat dignissimos illum nulla voluptatibus vel optio, molestiae dolore velit iste maxime, nobis odio molestias!</p>
                            <p>Medical abstracts describe the current conditions of a patient. Doctors routinely scan dozens or hundreds of abstracts each day as they do their pointing to the patient’s malady. In the given dataset, abstracts from 5 different conditions have been included: digestive system diseases, cardiovascular diseases, neoplasms, nervous system diseases, and general pathological conditions.</p>
                        </Col>
                        <Col sm={2} xs={12} md={2} lg={2} xl={2} xxl={2} ></Col>
                    </Row>

                </div>
            </div>
        </section>
    );
};

export default Welcome;