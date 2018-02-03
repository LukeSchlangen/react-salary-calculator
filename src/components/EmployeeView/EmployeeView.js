import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';
import { addEmployee, deleteEmployee } from '../../redux/actions';

const EmployeeView = props => (
  <div>
    <EmployeeForm addEmployee={props.addEmployee} />
    <EmployeeList employeeList={props.employeeList} deleteEmployee={props.deleteEmployee} />
    <EmployeeTotal employeeList={props.employeeList} />
  </div>
);

const mapStateToProps = state => ({
  employeeList: state.employeeList,
});

const mapDispatchToProps = {
  addEmployee,
  deleteEmployee,
};

const propTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.shape({
    firstName: String,
    lastName: String,
    idNumber: String,
    jobTitle: String,
    annualSalary: String,
  })),
  addEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

EmployeeView.propTypes = propTypes;
EmployeeView.defaultProps = {
  employeeList: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
