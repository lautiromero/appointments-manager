import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropType from 'prop-types';

const Form = ({createDate}) => {

    const [appointment, setAppoinment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })

    const [error, setError] = useState(false);
    
    const {pet, owner, date, time, symptoms} = appointment;

    // when user write in a input
    const handleChange = e => {
        
        setAppoinment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }
    

    const submitDate = e => {
        e.preventDefault();

        // validar

        if ( pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || 
            symptoms.trim() === '' ) {
            
                setError(true);
                return;                   
        }
        setError(false);

        // asignar id
        appointment.id = uuidv4();

        // crear cita
        createDate(appointment)

        // reiniciar form
        setAppoinment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        });
    }

    return (
        <Fragment>
            <h2>Create appointment</h2>

            {
                error ? <p className='alerta-error'>All fields are required</p> : null
            }

            <form onSubmit={submitDate}>
                <label>Pet Name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={handleChange}
                    value={pet}
                />
                <label htmlFor="">Owner's Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner Pet Name"
                    onChange={handleChange}
                    value={owner}
                />
                <label htmlFor="">Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label htmlFor="">Time</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label htmlFor="">Symptoms</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Appointment</button>
            </form>
        </Fragment>
    );
};

Form.propTypes = {
    createDate: PropType.func.isRequired
}

export default Form;