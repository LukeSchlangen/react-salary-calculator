import actionTypes from './constants/actionTypes';

export function addEmployee(newEmployee) {
  return {
    type: actionTypes.addEmployee,
    payload: newEmployee,
  };
}

export function addEmployeeAsync(newEmployee) {
  return {
    type: actionTypes.addEmployeeAsync,
    payload: newEmployee,
  };
}

export function deleteEmployee(employeeToDelete) {
  return {
    type: actionTypes.deleteEmployee,
    payload: employeeToDelete,
  };
}

export function deleteEmployeeAsync(employeeToDelete) {
  return {
    type: actionTypes.deleteEmployeeAsync,
    payload: employeeToDelete,
  };
}
