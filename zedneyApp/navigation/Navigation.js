import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import Tabs from './Tabs';
import {AuthContext} from '../component/AuthContext';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <Tabs /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
export default Navigation;
