import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteDate}) => {
    return (
        <div className='cita'>
            <p>Pet: <span>{appointment.pet}</span></p>
            <p>Owner: <span>{appointment.owner}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Time: <span>{appointment.time}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>

            <button
                className="button eliminar u-full-witdh"
                onClick={ () => deleteDate(appointment.id) }
            >Eliminar &times;</button>
        </div>
    );
};

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteDate: PropTypes.func.isRequired
}

export default Appointment;