import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEmployeeAsync } from '../../redux/actions';

// eslint-disable-next-line no-shadow
const EmployeeList = ({ employeeList, deleteEmployeeAsync }) => (
  <ul>
    {employeeList.map(employee => (
      <li key={employee.idNumber}>
        {`${employee.firstName}
        ${employee.lastName}
        is the ${employee.jobTitle}
        and makes ${employee.annualSalary}`}
        <button onClick={() => deleteEmployeeAsync(employee)}>
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
  deleteEmployeeAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employeeList: state.employeeList,
});

const mapDispatchToProps = {
  deleteEmployeeAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
