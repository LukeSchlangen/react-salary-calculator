import { delay } from 'redux-saga';
import { put, call, takeEvery, all } from 'redux-saga/effects';

// Our worker Saga: will perform the add employee task
export function* addEmployeeAsync({ payload }) {
  yield call(delay, 1000);
  yield put({ type: 'ADD_EMPLOYEE', payload });
}

// Our watcher Saga: spawn a new addEmployeeAsync task on each ADD_EMPLOYEE_ASYNC
export function* watchAddEmployeeAsync() {
  yield takeEvery('ADD_EMPLOYEE_ASYNC', addEmployeeAsync);
}

// Our worker Saga: will perform the delete employee task
export function* deleteEmployeeAsync({ payload }) {
  yield call(delay, 1000);
  yield put({ type: 'DELETE_EMPLOYEE', payload });
}

// Our watcher Saga: spawn a new deleteEmployeeAsync task on each DELETE_EMPLOYEE_ASYNC
export function* watchDeleteEmployeeAsync() {
  yield takeEvery('DELETE_EMPLOYEE_ASYNC', deleteEmployeeAsync);
}


export default function* rootSaga() {
  yield all([
    watchAddEmployeeAsync(),
    watchDeleteEmployeeAsync(),
  ]);
}
