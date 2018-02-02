import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmployeeForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      idNumber: '',
      jobTitle: '',
      annualSalary: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addEmployee(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
  addEmployee: PropTypes.func.isRequired,
};

export default EmployeeForm;
