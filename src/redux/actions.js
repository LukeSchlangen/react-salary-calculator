import actionTypes from './constants/actionTypes';

export function addEmployee(newEmployee) {
  return {
    type: actionTypes.addEmployee,
    payload: newEmployee,
  };
}

export function deleteEmployee(employeeToDelete) {
  return {
    type: actionTypes.deleteEmployee,
    payload: employeeToDelete,
  };
}
