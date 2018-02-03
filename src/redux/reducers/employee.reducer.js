import actionTypes from '../constants/actionTypes';

const removeEmployee = (employeeList, employeeToDelete) => {
  const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;
  const newEmployeeList = employeeList.filter(matchEmployee);
  return newEmployeeList;
};

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.addEmployee:
      return [...state, action.payload];
    case actionTypes.deleteEmployee:
      return removeEmployee(state.employeeList, action.payload);
    default:
      return state;
  }
}
