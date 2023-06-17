import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';

const StudentPage = () => {
  const [students, setStudents] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('/api/v1/students');

        if (res.data.success) {
          setStudents(res.data.data);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchStudents();
  }, []);

  return (
    <Layout>
      <div className="students">
        {students &&
          students.map((student) => (
            <p key={student._id}>{student.fullname}</p>
          ))}
      </div>
    </Layout>
  );
};

export default StudentPage;
