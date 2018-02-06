import React from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';

const EmployeeView = () => (
  <div>
    <EmployeeForm />
    <EmployeeList />
    <EmployeeTotal />
  </div>
);

export default EmployeeView;
