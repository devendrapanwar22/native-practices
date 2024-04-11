import React, { useContext  } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from '../HomeStack/HomeStack'
import Authstack from '../AuthStack/Authstack'
import { Authcontext } from '../Authcontext/Authcontext'
import { ActivityIndicator, View, Text, StatusBar } from 'react-native'
const Routes = () => {


  const { isLoading, userToken, isLogedIn } = useContext(Authcontext);

  

  return (
    <NavigationContainer>
      {
        isLoading ?
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size={'large'} />
          </View>
          :
          <View style={{ flex: 1 }}>
            <StatusBar/>
            {
              userToken ? <HomeStack /> : <Authstack />
            }
          </View>}
    </NavigationContainer>
  )
}

export default Routes 