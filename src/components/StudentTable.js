import DataTable from 'react-data-table-component';

const StudentTable = ({ students }) => {
  // DataTable configs
  const columns = [
    {
      name: 'Student Name',
      selector: (row) => row.name,
      sortable: true,
      sortField: 'fullname',
    },
    {
      name: 'School Year',
      selector: (row) => row.schoolYear,
    },
    {
      name: 'Class',
      selector: (row) => row.class,
    },
  ];
  const tableData = students.map((student) => {
    return {
      name: student.fullname,
      schoolYear: student.schoolYear,
      class: student.class === null ? 'None' : student.class,
    };
  });
  return (
    <>
      <DataTable columns={columns} data={tableData} pagination />
    </>
  );
};

export default StudentTable;
