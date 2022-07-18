import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/Register';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
