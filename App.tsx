import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Text>Hello world!</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
