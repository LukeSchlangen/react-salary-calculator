import React from 'react';
import PropTypes from 'prop-types';

const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

const calculateMonthlyCost = employeeList => employeeList.reduce(employeeSalary, 0) / 12;

const EmployeeTotal = ({ employeeList }) => (
  <p>{calculateMonthlyCost(employeeList)}</p>
);

EmployeeTotal.propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.shape({
    firstName: String,
    lastName: String,
    idNumber: String,
    jobTitle: String,
    annualSalary: String,
  })).isRequired,
};

export default EmployeeTotal;
