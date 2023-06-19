import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { BiDetail } from 'react-icons/bi';
import '../styles/TableStyles.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';
import { TablePagination } from '@mui/material';

function StudentTable({ students, detailStudent, editStudent, deleteStudent }) {
  const { user } = useAuthContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  function handleChangePage(event, newpage) {
    setPage(newpage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="fullname">Full name</th>
            <th className="class">Class</th>
            <th className="schoolyear">School Year</th>
            <th className="fit">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((student) => {
              return (
                <tr key={student._id}>
                  <td className="fullname">{student.fullname}</td>
                  <td className="class">
                    {student.class === null ? 'None' : student.class}
                  </td>
                  <td className="schoolyear">{student.schoolYear}</td>
                  <td className="fit">
                    <span className="actions">
                      <BiDetail
                        className="details-btn"
                        onClick={() => detailStudent(student._id)}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editStudent(student._id)}
                      />
                      {user.isAdmin && (
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => deleteStudent(student._id)}
                        />
                      )}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <TablePagination
        className="pagination-bar"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default StudentTable;
