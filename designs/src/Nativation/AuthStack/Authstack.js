import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Login ,ForgetPassword,Home,SetPassword,Register, ChooseAccount} from '../../constants';
import NavgationStrings from '../../constants/NavgationStrings';

const Stack =  createStackNavigator();

const Authstack = () => {
  return (
        <Stack.Navigator initialRouteName={NavgationStrings.Login} screenOptions={{headerShown:false}}> 
        <Stack.Screen name={NavgationStrings.Login} component={Login}/>
        <Stack.Screen name={NavgationStrings.ForgetPassword} component={ForgetPassword}/>
        <Stack.Screen name={NavgationStrings.SetPassword} component={SetPassword}/>
        <Stack.Screen name={NavgationStrings.Register} component={Register}/>
        <Stack.Screen name={NavgationStrings.ChooseAccount} component={ChooseAccount}/>
        </Stack.Navigator>
  )
}

export default Authstack