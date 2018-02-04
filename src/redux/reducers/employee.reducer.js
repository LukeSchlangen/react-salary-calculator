import actionTypes from '../constants/actionTypes';

const removeEmployee = (employeeList, employeeToDelete) => {
  const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;
  const newEmployeeList = employeeList.filter(matchEmployee);
  return newEmployeeList;
};

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.addEmployee:
      return action.payload ? [...state, action.payload] : state;
    case actionTypes.deleteEmployee:
      return action.payload ? removeEmployee(state, action.payload) : state;
    default:
      return state;
  }
}
