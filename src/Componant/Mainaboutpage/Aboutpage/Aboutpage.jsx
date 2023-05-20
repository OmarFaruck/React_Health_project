import React from 'react';
import About from '../About/About';
import Cardage from '../../Mainheropage/Maincardpage/Cardage/Cardage';
import Welcome from '../Welcometext/Welcome';
import Doctor from '../../Mainheropage/Doctorpage/Doctor';

const Aboutpage = () => {
    return (
        <>
            <About/>
            <Cardage/>
            <Welcome/>
            <Doctor/>
        </>
    );
};

export default Aboutpage;