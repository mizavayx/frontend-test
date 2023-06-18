import { useEffect } from 'react';
import { useStudentsContext } from '../hooks/useStudentsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Layout from '../components/Layout/Layout';
import axios from 'axios';

// components
import StudentListing from '../components/StudentListing';

const StudentPage = () => {
  const { students, dispatch } = useStudentsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('/api/v1/students');

        console.log(res.data.data);
        // update the students context
        if (res.data.success) {
          dispatch({ type: 'SET_STUDENTS', payload: res.data.data });
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    if (user) {
      fetchStudents();
    }
  }, [dispatch, user]);

  return (
    <Layout>
      <div className="students">
        {students &&
          students.map((student) => (
            <StudentListing key={student._id} student={student} />
          ))}
      </div>
    </Layout>
  );
};

export default StudentPage;
