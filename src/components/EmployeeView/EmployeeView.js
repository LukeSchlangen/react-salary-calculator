import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';
import { addEmployeeAsync, deleteEmployeeAsync } from '../../redux/actions';

const EmployeeView = props => (
  <div>
    <EmployeeForm addEmployee={props.addEmployeeAsync} />
    <EmployeeList employeeList={props.employeeList} deleteEmployee={props.deleteEmployeeAsync} />
    <EmployeeTotal employeeList={props.employeeList} />
  </div>
);

const mapStateToProps = state => ({
  employeeList: state.employeeList,
});

const mapDispatchToProps = {
  addEmployeeAsync,
  deleteEmployeeAsync,
};

const propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.shape({
    firstName: String,
    lastName: String,
    idNumber: String,
    jobTitle: String,
    annualSalary: String,
  })),
  addEmployeeAsync: PropTypes.func.isRequired,
  deleteEmployeeAsync: PropTypes.func.isRequired,
};

EmployeeView.propTypes = propTypes;
EmployeeView.defaultProps = {
  employeeList: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
