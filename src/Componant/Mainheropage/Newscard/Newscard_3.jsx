import React from 'react';
import Card from 'react-bootstrap/Card';
import blog3 from '../../images/blog/blog_3.jpg'
import img3 from '../../images/person/person_3.jpg'
import Row from 'react-bootstrap/esm/Row';
import '../Newspage/Newspage.css'
const Newscard_3 = () => {
    return (
        <>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog3} />
                <Card.Body> 
                    <Card.Text>
                    What is the impact of eating too much sugar?
                    </Card.Text>
                    <Row>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                                <img src={img3} alt="" className="img-fluid mx-auto d-block personal" />
                            </div>  
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12">
                                    <p className='text'>Diego Simmon</p>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
                                    <p className='texts'>2 week ago</p>
                                </div>
                        </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default Newscard_3;