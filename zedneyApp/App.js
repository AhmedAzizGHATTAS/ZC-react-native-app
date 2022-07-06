import * as React from 'react';
import {StyleSheet} from 'react-native';
import { AuthProvider } from './component/AuthContext';
import Navigation from './navigation/Navigation';
export default function App() {
  return (
    <AuthProvider> 
  <Navigation />
  </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
