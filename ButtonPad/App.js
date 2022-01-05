import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonPad from './src/pages/ButtonPad';
import Add from './src/pages/Add';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* ToDo remove the header */}
      <Stack.Navigator>
        <Stack.Screen
          name="ButtonPad"
          component ={ButtonPad}
        />
         <Stack.Screen
          name="Add"
          component ={Add}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
