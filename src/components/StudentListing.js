// import { useAuthContext } from '../hooks/useAuthContext';
// import { useState } from 'react';
// import axios from 'axios';

const StudentListing = ({ student }) => {
  //const { user } = useAuthContext();
  //const [isShown, setIsShown] = useState(false);
  return (
    <div className="student-listing">
      <h4>{student.fullname}</h4>
      <p>
        <strong>School Year: </strong>
        {student.schoolYear}
      </p>
      <p>
        <strong>Class: </strong>
        {student.class === null ? 'None' : student.class}
      </p>
    </div>
  );
};
export default StudentListing;
