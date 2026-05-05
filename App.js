import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/screen/authscreen/LoginPage';
import SignupPage from './src/screen/authscreen/SignupPage';
import Inventory from './src/screen/InventoryPage';
import Homepage from './src/screen/Homepage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name='Inventory' component={InventoryPage}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='SignupPage' component={SignupPage}/>
        <Stack.Screen name='Home' component={Homepage}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}