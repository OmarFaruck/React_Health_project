import React from 'react';
import '../Cardage/Cardage.css'
import { FaRegComments } from "react-icons/fa";
import { BsCheckCircleFill,BsFillTrophyFill } from "react-icons/bs";
const Cardage = () => {
    return (
        <>
            <div className="bg-light">
                <div className="page-section py-3 mt-md-n5 custom-index">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service">
                                <p><FaRegComments className='Chat'/><span>Chat</span> with a doctors</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service">
                                <p><BsCheckCircleFill className='Chat'/><span>One</span>-Health Protection</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service">
                                <p><BsFillTrophyFill className='Chat'/><span>One</span>-Health Pharmacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>

        </>
    );
};

export default Cardage;