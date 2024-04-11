import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavgationStrings from '../../constants/NavgationStrings';

export const Authcontext = createContext();
const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = async (email, password) => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('email');
            let correctPassword = await AsyncStorage.getItem('password');
            if (userToken === email && password=== correctPassword) {
                setUserToken('xjdkjfdks')
                console.log('inside')
            }
            else {
                alert("password does not match")
            }
        } catch (error) {
            console.log("Something Went wrong", error);
        }

        setIsLoading(false);
    }


    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('email');
        setIsLoading(false);
    }

    const signUp = async (email, password, navigation) => {
        console.warn(email,password)
        setIsLoading(true)
        AsyncStorage.setItem(`email`, email);
        AsyncStorage.setItem('password',password);
        let x = await AsyncStorage.getItem('email');
        console.warn(x);
        setIsLoading(false);
        navigation.navigate(NavgationStrings.Login)

    }

    const isLogedIn = async () => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('email');
            setUserToken(userToken);
            setIsLoading(false)
        } catch (error) {
            console.log("Something Went wrong", error);
        }
    }
    useEffect(() => {
        isLogedIn();
    }, [])
    return (
        <Authcontext.Provider value={{ login, logout, isLoading, userToken, signUp, isLogedIn }}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthProvider