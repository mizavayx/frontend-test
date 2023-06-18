import { useEffect } from 'react';
import { useStudentsContext } from '../hooks/useStudentsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Layout from '../components/Layout/Layout';
import axios from 'axios';

// components
import StudentTable from '../components/StudentTable';

const StudentPage = () => {
  const { students, dispatch } = useStudentsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('/api/v1/students');

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
        {students && (
          <>
            <StudentTable students={students} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default StudentPage;
