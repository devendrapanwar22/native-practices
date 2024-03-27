import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Authstack from './src/Nativation/AuthStack/Authstack';
import Routes from './src/Nativation/Routes/Routes';

const App = () => {
  return (
      <Routes/>
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
