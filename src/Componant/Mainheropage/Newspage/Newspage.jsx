import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Newscard1 from '../Newscard/Newscard_1';
import Newscard2 from '../Newscard/Newscard_2';
import Newscard3 from '../Newscard/Newscard_3';
import { NavLink } from 'react-router-dom';
import '../Newspage/Newspage.css'

const Newspage = () => {
    return (
        <section id='newspage'>
            <div className="container">
                <h1>Latest News</h1>
                <Row>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">

                        <NavLink className='nav-link'>
                            <Newscard1 />
                        </NavLink>

                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">

                        <NavLink className='nav-link'>
                            <Newscard2 />
                        </NavLink>

                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12">

                        <NavLink className='nav-link'>
                            <Newscard3 />
                        </NavLink>

                    </div>
                </Row>
                <div className="text-center mt-5 pb-4">
                <div className="btn btn-dark">read more</div>
                </div>
               
            </div>
        </section>
    );
};

export default Newspage;