import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import blog1 from '../../images/blog/blog_1.jpg'
import img1 from '../../images/person/person_1.jpg'
import '../Newspage/Newspage.css'
const Newscard_1 = () => {
    return (
        <>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                    <Card.Text>
                        List of Countries without Coronavirus case
                    </Card.Text>
                    <Row>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            <img src={img1} alt="" className="img-fluid mx-auto d-block personal" />
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12">
                            <p className='text'>
                                Roger Adams
                            </p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                            <p className='texts'>1 week ago</p>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default Newscard_1;