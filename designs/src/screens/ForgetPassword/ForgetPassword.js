import { Keyboard, Text, View, SafeAreaView, StatusBar, } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../constants/Style/styles'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import NavgationStrings from '../../constants/NavgationStrings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ForgetPassword = ({ navigation }) => {

  const [isActive, setActive] = useState(false)
  const [keyboardHeight, setkeyboardHeight] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
      <HeaderComp onPressback={() => navigation.navigate(NavgationStrings.Login)} />
      <KeyboardAwareScrollView> 
      <View style={{ flex: 1, paddingHorizontal: moderateScale(24) }}>
        <View style={{ flex: 0.2 }}>
          <MaterialCommunityIcons name={'lock'} size={moderateScale(80)} color="black" style={{ alignSelf: 'center',flex:1 }} />
        </View>
        <View style={{ flex: 0.4}}><Text style={styles.headingtext}>Forget Password</Text></View>
        <View style={{ flex: 0.2}}><Text style={styles.settextstylenormal}> Enter The Email Address associated with your account.</Text></View>

        <View style={{ flex: 1,marginTop:moderateVerticalScale(40)}}>
          <TextInputWithLable lable={'Email'} placeHolder={"Enter your Email"} secureTextEntry={isActive} onpressright={() => setActive(!isActive)} righticon={isActive ? 'eye' : 'eye-off'} keyboardType={'email-address'} />
          <ButtonComp btntext={'Continue'} btnstyle={{ width: '100%'}} />
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default ForgetPassword

