import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, TabRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgetPassword, Home, SetPassword, Register, ChooseAccount } from '../../constants';
import NavgationStrings from '../../constants/NavgationStrings';
import TabRoutes from '../Routes/TabRoutes';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={NavgationStrings.TabRoutes} component={TabRoutes} />
        </Stack.Navigator>
    )
}

export default HomeStack