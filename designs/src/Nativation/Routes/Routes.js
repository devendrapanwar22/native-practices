import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from '../HomeStack/HomeStack'
import Authstack from '../AuthStack/Authstack'

 
const Routes = () => {
    let m= false;
  return (
    <NavigationContainer>
       {
        m ? <HomeStack/>:<Authstack/>
       }
    </NavigationContainer>
  )
}

export default Routes 