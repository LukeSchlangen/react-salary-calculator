import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = ({ employeeList }) => (
  <ul>
    {employeeList.map(employee => (<li key={employee.idNumber}>Bob</li>))}
  </ul>
);

EmployeeList.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.shape({
    firstName: String,
    lastName: String,
    idNumber: String,
    jobTitle: String,
    annualSalary: String,
  })),
};

EmployeeList.defaultProps = {
  employeeList: [],
};

export default EmployeeList;
