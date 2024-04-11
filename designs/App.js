import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import React from 'react';
import Authstack from './src/Nativation/AuthStack/Authstack';
import Routes from './src/Nativation/Routes/Routes';
import AuthProvider from './src/Nativation/Authcontext/Authcontext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Routes />
    </AuthProvider>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
