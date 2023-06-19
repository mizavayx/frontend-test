import React from 'react';
import '../styles/FormStyles.css';
import moment from 'moment/moment';

function StudentDetailsForm({ closeForm, student }) {
  const handleClose = (e) => {
    e.preventDefault();

    closeForm();
  };

  return (
    <div
      className="form"
      onClick={(e) => {
        if (e.target.className === 'form') closeForm();
      }}
    >
      <div className="form-inner">
        <h2>Student details</h2>
        <hr />
        <p>
          <strong>ID: </strong>
          {student?._id}
        </p>
        <p>
          <strong>Full name: </strong>
          {student?.fullname}
        </p>
        <p>
          <strong>Gender: </strong>
          {student?.gender}
        </p>
        <p>
          <strong>Class: </strong>
          {student?.class === null ? 'None' : student?.class}
        </p>
        <p>
          <strong>School year: </strong>
          {student?.schoolYear}
        </p>
        <p>
          <strong>Email: </strong>
          {student?.email === null ? 'None' : student?.email}
        </p>
        <p>
          <strong>Date of birth: </strong>
          {moment(student?.dob).utc().format('DD-MM-YYYY')}
        </p>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}
export default StudentDetailsForm;
