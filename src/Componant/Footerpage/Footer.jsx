import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import { NavLink } from 'react-router-dom';
import '../Footerpage/Footer.css'
import Social from '../Socialicon/Social';
const Footer = () => {
    return (
        <section id='page-footer'>
            <div className="container">
                <Row>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
                        <h5>Company</h5>
                        <ul className="footer-menu">
                            <li><NavLink to="#">About Us</NavLink></li>
                            <li><NavLink to="#">Career</NavLink></li>
                            <li><NavLink to="#">Editorial Team</NavLink></li>
                            <li><NavLink to="#">Protection</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
                        <h5>More</h5>
                        <ul className="footer-menu">
                            <li><NavLink to="#">Terms & Condition</NavLink></li>
                            <li><NavLink to="#">Privacy</NavLink></li>
                            <li><NavLink to="#">Advertise</NavLink></li>
                            <li><NavLink to="#">Join as Doctors</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
                        <h5>Our partner</h5>
                        <ul className="footer-menu">
                            <li><NavLink to="#">One-Fitness</NavLink></li>
                            <li><NavLink to="#">One-Drugs</NavLink></li>
                            <li><NavLink to="#">One-Live</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
                        <h5>Contact</h5>
                        <p className="footer mt-2">351 Willow Street Franklin, MA 02038</p>
                        <div className='lastfooter'> 
                            <NavLink to="#" className="footer-link">701-573-7582</NavLink>
                            <NavLink to="#" className="footer-link">healthcare@temporary.net</NavLink>
                        </div>


                        <h4 className="media mt-2">Social Media</h4>

                        {/* social page */}
                        <Social />
                    </div>
                </Row>
                <hr />

                <p id="copyright">Copyright &copy; 2020 <NavLink to="https://macodeid.com/" target="_blank">MACode ID</NavLink>. All right reserved</p>
            </div>
        </section>
    );
};

export default Footer;