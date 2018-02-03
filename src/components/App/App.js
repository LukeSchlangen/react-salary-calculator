import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeView from '../EmployeeView/EmployeeView';
import reducers from '../../redux/reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
);

const App = () => (
  <Provider store={store}>
    <EmployeeView />
  </Provider>
);

export default App;
