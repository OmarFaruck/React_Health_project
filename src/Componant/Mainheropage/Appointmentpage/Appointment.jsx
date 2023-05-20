import React from 'react';
import '../Appointmentpage/Appointment.css'

const Appointment = () => {
    return (
        <section id='Appointment'>
            <div className="container">
                <h1 className="text-center">Make an Appointment</h1>

                <form className="main-form">
                    <div className="row mt-5 ">
                        <div className="col-12 col-sm-6 py-2">
                            <input type="text" className="form-control" placeholder="Full name" />
                        </div>
                        <div className="col-12 col-sm-6 py-2">
                            <input type="text" className="form-control" placeholder="Email address.." />
                        </div>
                        <div className="col-12 col-sm-6 py-2" data-wow-delay="300ms">
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 py-2" data-wow-delay="300ms">
                            <select name="departement" id="departement" className="custom-select">
                                <option value="general">General Health</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="dental">Dental</option>
                                <option value="neurology">Neurology</option>
                                <option value="orthopaedics">Orthopaedics</option>
                            </select>
                        </div>
                        <div className="col-12 py-2" data-wow-delay="300ms">
                            <input type="text" className="form-control" placeholder="Number.." />
                        </div>
                        <div className="col-12 py-2" data-wow-delay="300ms">
                            <textarea name="message" id="message" className="form-control" rows="6" placeholder="Enter message.."></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Submit Request</button>
                </form>
            </div>

        </section>
    );
};

export default Appointment;