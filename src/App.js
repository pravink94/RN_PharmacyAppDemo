import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import {
  LoginScreen, RegistrationScreen
} from './screens';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

class App extends Component{
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"LoginScreen"} >
            <Screen name='LoginScreen' component={LoginScreen} />
            <Screen name='RegistrationScreen' component={RegistrationScreen} />
            </Navigator>
            </NavigationContainer>
      </Provider>
    );
  }
}

export default App;