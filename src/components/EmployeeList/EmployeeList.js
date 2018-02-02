import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = ({ employeeList }) => (
  <ul>
    {employeeList.map(employee => (
      <li key={employee.idNumber}>
        {employee.firstName} {employee.lastName} is the {employee.jobTitle} and makes ${employee.annualSalary}
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
};

export default EmployeeList;
