import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import EmployeeView from '../EmployeeView/EmployeeView';
import reducers from '../../redux/reducers';
import rootSaga from '../../redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <EmployeeView />
  </Provider>
);

export default App;
