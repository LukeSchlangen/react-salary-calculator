import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import EmployeeList from './components/EmployeeList/EmployeeList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      employeeList: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
  }

  addEmployee(newEmployee) {
    this.setState({
      employeeList: [...this.state.employeeList, newEmployee],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EmployeeForm addEmployee={this.addEmployee} />
        <EmployeeList employeeList={this.state.employeeList} />
        {/* <EmployeeTotal employeeList={this.state.employeeList} /> */}
      </div>
    );
  }
}

export default App;
