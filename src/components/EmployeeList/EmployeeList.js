import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = ({ employeeList, deleteEmployee }) => (
  <ul>
    {employeeList.map(employee => (
      <li key={employee.idNumber}>
        {employee.firstName}
        {employee.lastName}
        is the {employee.jobTitle}
        and makes ${employee.annualSalary}
        <button onClick={() => deleteEmployee(employee)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

EmployeeList.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.shape({
    firstName: String,
    lastName: String,
    idNumber: String,
    jobTitle: String,
    annualSalary: String,
  })).isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default EmployeeList;
