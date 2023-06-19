import { useEffect, useState } from 'react';
import { useStudentsContext } from '../hooks/useStudentsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import StudentTable from '../components/StudentTable';
import '../styles/TableStyles.css';
import StudentDetailsForm from '../components/StudentDetailsForm';

const StudentPage = () => {
  const { students, dispatch } = useStudentsContext();
  const { user } = useAuthContext();

  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);
  const [studentDetailsOpen, setStudentDetailsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        setError(error.response.data.message);
      }
    };

    if (user) {
      fetchStudents();
    }
  }, [dispatch, user]);

  const handleDetailsStudent = (target) => {
    setStudentDetailsOpen(true);
    setStudent(students.find((x) => x._id === target));
  };

  const handleEditStudent = (target) => {
    console.log(target);
  };

  const handleDeleteStudent = (target) => {
    console.log(target);
  };

  return (
    <Layout>
      <div>
        {students && (
          <>
            <StudentTable
              className="students-table"
              students={students}
              detailStudent={handleDetailsStudent}
              editStudent={handleEditStudent}
              deleteStudent={handleDeleteStudent}
            />
            {studentDetailsOpen && (
              <StudentDetailsForm
                closeForm={() => {
                  setStudentDetailsOpen(false);
                  setStudent(null);
                }}
                student={student}
              />
            )}
          </>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </Layout>
  );
};

export default StudentPage;
