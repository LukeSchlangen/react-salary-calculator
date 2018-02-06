import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmployeeAsync } from '../../redux/actions';

const emptyEmployeeObject = {
  firstName: '',
  lastName: '',
  idNumber: '',
  jobTitle: '',
  annualSalary: '',
};

class EmployeeForm extends Component {
  constructor() {
    super();

    this.state = emptyEmployeeObject;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearEmployeeFields = this.clearEmployeeFields.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addEmployeeAsync(this.state);
    this.clearEmployeeFields();
  }

  clearEmployeeFields() {
    this.setState(emptyEmployeeObject);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* eslint-disable max-len  */}
        <input onChange={this.handleChange} placeholder="First Name" value={this.state.firstName} name="firstName" />
        <input onChange={this.handleChange} placeholder="Last Name" value={this.state.lastName} name="lastName" />
        <input onChange={this.handleChange} placeholder="ID Number" value={this.state.idNumber} name="idNumber" />
        <input onChange={this.handleChange} placeholder="Job Title" value={this.state.jobTitle} name="jobTitle" />
        <input onChange={this.handleChange} placeholder="Annual Salary" value={this.state.annualSalary} name="annualSalary" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

EmployeeForm.propTypes = {
  addEmployeeAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employeeList: state.employeeList,
});

const mapDispatchToProps = {
  addEmployeeAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
