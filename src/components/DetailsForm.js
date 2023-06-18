import React from 'react';
import '../styles/FormStyles.css';

function DetailsForm(props) {
  return props.trigger ? (
    <div className="form">
      <div className="form-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
            props.setStudent();
          }}
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '0px 7px',
          }}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}
export default DetailsForm;
