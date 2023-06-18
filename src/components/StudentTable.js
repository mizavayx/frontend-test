import DataTable from 'react-data-table-component';
import moment from 'moment/moment';
import axios from 'axios';
import { useState } from 'react';
import DetailsForm from './DetailsForm';
import EditForm from './EditForm';

const StudentTable = ({ students }) => {
  const [detailsButton, setDetailsButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [student, setStudent] = useState();
  const [data, setData] = useState();

  const [formState, setFormState] = useState();

  const handleSubmit = (newData) => {
    student === null
      ? setData([...data, newData])
      : setData(
          data.map((currRow, idx) => {
            if (idx !== student) return currRow;

            return newData;
          })
        );
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  // DataTable configs
  const columns = [
    {
      name: 'Student Name',
      selector: (row) => row.name,
      sortable: true,
      sortField: 'fullname',
    },
    {
      name: 'Class',
      selector: (row) => row.class,
    },
    {
      name: 'School Year',
      selector: (row) => row.schoolYear,
    },
    {
      cell: (row) => (
        <>
          <button
            style={{ padding: '0px 10px', margin: '5px' }}
            onClick={() => {
              setStudent(students.find((x) => x._id === row.id));
              setDetailsButton(true);
            }}
          >
            Details
          </button>
          <DetailsForm
            trigger={detailsButton}
            setTrigger={setDetailsButton}
            setStudent={setStudent}
          >
            <h2>Student details</h2>
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
          </DetailsForm>

          <button
            style={{ padding: '0px 10px', margin: '5px' }}
            onClick={() => {
              setStudent(students.find((x) => x._id === row.id));
              setEditButton(true);
              setFormState(student && { ...student });
            }}
          >
            Edit
          </button>
          <EditForm trigger={editButton} setTrigger={setEditButton}></EditForm>
        </>
      ),
    },
  ];
  const tableData = students.map((student) => {
    return {
      id: student._id,
      name: student.fullname,
      schoolYear: student.schoolYear,
      class: student.class === null ? 'None' : student.class,
    };
  });

  const customStyles = {
    rows: {
      hover: { backgroundColor: '#eee' },
      style: {
        minHeight: '72px',
        fontSize: '20px',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderBottomWidth: '2px',
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '20px',
        backgroundColor: '#ccc',
        color: '#222',
      },
    },

    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    },
    table: {
      style: {
        display: 'block',
        overflow: 'hidden',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
        boxShadow: '0px 10px 10px #ccc',
        borderRadius: '10px',
        whiteSpace: 'nowrap',
        width: '70%',
        maxWidth: '80%',
        height: '70%',
        marginTop: '50px',
        marginLeft: '50px',
        overflowX: 'auto',
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    },
    pagination: {
      style: {
        minHeight: '40px',
        width: '70%',
        height: '70%',
        marginLeft: '50px',
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        padding: '8px',
        margin: 'px',
        cursor: 'pointer',
      },
    },
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={tableData}
        pagination
        customStyles={customStyles}
      />
    </>
  );
};

export default StudentTable;
