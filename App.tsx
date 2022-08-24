import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, MainNavigator} from '~navigation';

const App = () => {
  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
