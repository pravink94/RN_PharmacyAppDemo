import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import {
  LoginScreen, RegistrationScreen
} from './screens';
class App extends Component{
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        {/* <LoginScreen /> */}
        <RegistrationScreen />
      </Provider>
    );
  }
}

export default App;