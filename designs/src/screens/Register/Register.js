import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../constants/Style/styles'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale } from 'react-native-size-matters'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NavgationStrings from '../../constants/NavgationStrings'

const Register = ({ navigation }) => {
  const [ischeck, setcheck] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComp onPressback={() => navigation.navigate(NavgationStrings.ChooseAccount)} />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: moderateScale(14) }}>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={"FirstName"} />
            <View style={{ marginHorizontal: moderateScale(8) }} ></View>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={'LastName'} />
          </View>
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={'salon name'} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={"Date Of Birth"} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={"Phone no."} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={"Email"} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: moderateScale(14), marginTop: moderateScale(28) }}>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={"Country"} />
            <View style={{ marginHorizontal: moderateScale(8) }} ></View>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={'Postal/ZipCode'} />
          </View>
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={'Address'} keyboardType={'email-address'} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={'Refral Code'} />
          <TouchableOpacity style={styless.iconcontainer} onPress={() => setcheck(!ischeck)}>
            <MaterialCommunityIcons name={ischeck ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color="black" />
            <Text>By Logging in you, agree to NOOVOO's  Privacy Policy and Tearms of use</Text>
          </TouchableOpacity>
          <ButtonComp btnstyle={{ width: '90%', marginTop: moderateScale(24) }} btntext={'Continue'} onPressbtn={() => navigation.navigate(NavgationStrings.SetPassword)} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Register

const styless = StyleSheet.create({
  lablecontainer: { marginHorizontal: moderateScale(14), marginTop: moderateScale(28) },
  iconcontainer: { flexDirection: 'row', marginRight: moderateScale(12),
   alignItems: 'center', marginTop: moderateScale(24), justifyContent: 'space-between',
    marginHorizontal: moderateScale(10) }

})