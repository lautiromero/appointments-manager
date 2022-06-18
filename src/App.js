import { React, Fragment, useState, useEffect } from 'react';
import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {

  let savedAppointments = JSON.parse(localStorage.getItem('appointments'));

  if (!savedAppointments) {
    savedAppointments = [];
  }

  const [appointments, setAppoinments] = useState(savedAppointments);

  useEffect( () => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const createDate = date => {
    setAppoinments([
      ...appointments,
      date
    ])
  }

  const deleteDate = id => {
    const newDates = appointments.filter( appointment => appointment.id !== id );
    setAppoinments(newDates);
  }

  const title = appointments.length === 0 ? 'No appointments' : 'Manage your appointments' 
 
  return (
    <Fragment>
      <h1>Patient Manager</h1>  
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createDate={createDate} 
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map( appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteDate={deleteDate}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
