import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';  
import Newscard1 from '../../Mainheropage/Newscard/Newscard_1';
import Newscard2 from '../../Mainheropage/Newscard/Newscard_2';
import Newscard3 from '../../Mainheropage/Newscard/Newscard_3';
import '../Newssection/Newssection.css' 
import Search from '../Searchpage/Search'; 
import Sidebarpage from '../Sidebarpage/Sidebarpage';
import Recent from '../Recentsidebar/Recent';
import Textbar from '../Textbar/Textbar';
const Newssection = () => {
    return (
        <section id='News_section'>
            <div className="container">
                <h1>Our News</h1>
                <Row>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard1 />
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard2/>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={4} xl={4} xxl={4} > 

                    <Search/>

                    </Col>
                </Row>

                <Row>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard3 />
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard1/>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={4} xl={4} xxl={4} >
                        <Sidebarpage/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard2 />
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard3/>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={4} xl={4} xxl={4} >
                        <Recent/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard2 />
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={4} xl={4} xxl={4} > 
                    <Newscard1/>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={4} xl={4} xxl={4} >
                        <Textbar/>
                    </Col>
                </Row>

            </div>
        </section>
    );
};

export default Newssection;