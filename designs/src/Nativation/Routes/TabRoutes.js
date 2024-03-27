import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavgationStrings from '../../constants/NavgationStrings';
import { Home, Profile, Bookings } from '../../constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialCommunityIcons name='home' size={30} color={focused ? '#89D6CE' : 'black'} />
                    )
                }
            }}
                name={NavgationStrings.Home} component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialCommunityIcons name='account' size={30} color={focused ? '#89D6CE' : 'black'} />
                    )
                }
            }} name={NavgationStrings.Profile} component={Profile} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialCommunityIcons name='bookmark-box-multiple' size={30} color={focused ? '#89D6CE' : 'black'} />
                    )
                }
            }} name={NavgationStrings.Bookings} component={Bookings} />
        </Tab.Navigator>
    )
}

export default TabRoutes