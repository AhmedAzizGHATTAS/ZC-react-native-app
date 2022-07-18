import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstPage from "../screens/FirstPage";
import SecondPage from "../screens/SecondPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        //we set the headerShow false to hide the top header
        headerShown: false,
        //we set the tabBarShowLabel false to hide the name under the icon 
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'white',borderRadius:30,width:'70%',left:"17%",bottom:'2%',position:'absolute'},
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#2A558C',
      }}>
    
        <Tab.Screen
        name="First"
        component={FirstPage}
        options={({route}) => ({
          
          tabBarIcon: ({color, size}) => (
            <Ionicons name="receipt-outline" color={color} size={size} />
          ),
        })}
      /> 
        <Tab.Screen
        name="Second"
        component={SecondPage}
        options={({route}) => ({
          
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
        })}
      /> 
    </Tab.Navigator>
  );
};
export default Tabs;
