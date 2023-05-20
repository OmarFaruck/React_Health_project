import React from 'react';
import { NavLink } from 'react-router-dom';

const News = () => {
    return (
        <section id='News'>
            <div className="page-banner overlay-dark bg-image" style={{
                backgroundImage: `url("http://127.0.0.1:5500/assets/img/bg_image_1.jpg")`,
                backgroundColor: "black",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="banner-section">
                    <div className="container text-center wow fadeInUp">
                        <nav aria-label="Breadcrumb">
                            <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>
                        </nav>
                        <h1 className="font-weight-normal text-light">News</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;