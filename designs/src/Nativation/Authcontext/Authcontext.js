import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native'
import NavgationStrings from '../../constants/NavgationStrings';
import { AuthCredential } from 'firebase/auth';

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(false);
  const auth = getAuth();

  const signUp = async (email, password, navigation) => {
    try {
      setIsLoading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      AsyncStorage.setItem('email', email);
      const user = userCredential.user;
      navigation.navigate(NavgationStrings.Login)
      console.log('created successfully');
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const signIn = async (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUserToken(true)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        alert("invalid email or passsword")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signOut = async () => {
    setIsLoading(true)
    setUserToken(false)
    setIsLoading(false)
  };

  const isLogedIn = async () => {
    setIsLoading(true)
    const token = AsyncStorage.getItem('email')
    setUserToken(true);
    setIsLoading(false)
  };

  useEffect(() => {
    isLogedIn();
  }, []);

  const login = async (email, password) => {
    // Perform login operation
    setIsLoading(true);
    try {
      // Authenticate user
      await signIn(email, password);
      // Set user token
      await AsyncStorage.setItem('userToken', 'userTokenValue');
      setUserToken('userTokenValue');
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const logout = async () => {
    // Perform logout operation
    setIsLoading(true);
    try {
      // Sign user out
      await signOut();
      // Remove user token
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <Authcontext.Provider value={{ signIn, signOut, isLoading, userToken, signUp }}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthProvider;
