import { Keyboard, Text, View, SafeAreaView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../constants/Style/styles'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale } from 'react-native-size-matters'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NavgationStrings from '../../constants/NavgationStrings'

const ForgetPassword = ({ navigation }) => {

  const [isActive, setActive] = useState(false)
  const [keyboardHeight, setkeyboardHeight] = useState(0);

  useEffect(() => {

    const KeyboardDidshowLisner = Keyboard.addListener('keyboardDidShow', (event)=>{
      console.log('event trigger',event)
      setkeyboardHeight(event.endCoordinates.height-40)
    })
    const KeyboardDidHideLisner = Keyboard.addListener('keyboardDidHide', (event)=>{
      console.log('event trigger',event)
      setkeyboardHeight(0)

    })

    return ()=>{
      KeyboardDidshowLisner.remove();
      KeyboardDidHideLisner.remove();
    }

  })



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComp onPressback={() => navigation.navigate(NavgationStrings.Login)} />
      <View style={{ flex: 1, paddingHorizontal: moderateScale(24) }}>
        <View style={{ flex: 0.2 }}>
          <MaterialCommunityIcons name={'lock'} size={80} color="black" style={{ alignSelf: 'center',flex:1 }} />
        </View>
        <View style={{ flex: 0.4}}><Text style={styles.headingtext}>Forget Password</Text></View>
        <View style={{ flex: 0.2}}><Text style={styles.settextstylenormal}> Enter The Email Address associated with your account.</Text></View>

        <View style={{ flex: 1,marginBottom:moderateScale(keyboardHeight) }}>
          <TextInputWithLable lable={'Email'} placeHolder={"Enter your Email"} secureTextEntry={isActive} onpressright={() => setActive(!isActive)} righticon={isActive ? 'eye' : 'eye-off'} keyboardType={'email-address'} />
          <ButtonComp btntext={'Continue'} btnstyle={{ width: '100%' }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgetPassword

