import actionTypes from '../constants/actionTypes';

const removeEmployee = (employeeList, employeeToDelete) => {
  const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;
  const newEmployeeList = employeeList.filter(matchEmployee);
  return newEmployeeList;
};

export default function (state = { employeeList: [] }, action) {
  switch (action.type) {
    case actionTypes.addEmployee:
      return { employeeList: [...state.employeeList, action.payload] };
    case actionTypes.deleteEmployee:
      return { employeeList: removeEmployee(state.employeeList, action.payload) };
    default:
      return state;
  }
}
