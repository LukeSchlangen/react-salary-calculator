import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  employeeList: state.employeeList,
});

export default connect(mapStateToProps)(EmployeeTotal);
