import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, MainNavigator} from '~navigation';
import {store} from '~store';

const App = () => {
  const isAuth = false;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isAuth ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
