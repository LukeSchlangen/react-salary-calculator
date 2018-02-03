import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      employeeList: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  addEmployee(newEmployee) {
    this.setState({
      employeeList: [...this.state.employeeList, newEmployee],
    });
  }

  deleteEmployee(employeeToDelete) {
    const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;

    this.setState({
      employeeList: this.state.employeeList.filter(matchEmployee),
    });
  }

  render() {
    return (
      <div>
        <EmployeeForm addEmployee={this.addEmployee} />
        <EmployeeList employeeList={this.state.employeeList} deleteEmployee={this.deleteEmployee} />
        <EmployeeTotal employeeList={this.state.employeeList} />
      </div>
    );
  }
}

export default App;
