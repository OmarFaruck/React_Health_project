import React from 'react';
import Doctor from '../Doctor/Doctor';
import Ourdoctor from '../../Mainaboutpage/Ourdoctor/Ourdoctor';
import Appointment from '../../Mainheropage/Appointmentpage/Appointment';

const Doctorpage = () => {
    return (
        <>
            <Doctor/>
            <Ourdoctor/>
            <Appointment/>
        </>
    );
};

export default Doctorpage;