import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from '../../constants/Style/styles'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NavgationStrings from '../../constants/NavgationStrings'
import { useNavigation } from '@react-navigation/native'
import { Authcontext } from '../../Nativation/Authcontext/Authcontext'

const Register = ({ }) => {
  const navigation = useNavigation();
  const [ischeck, setcheck] = useState(false)
  const { signUp } = useContext(Authcontext);
  const [FirstName, setFirtstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [salonName, setsalonName] = useState('');
  const [dob, setdob] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComp onPressback={() => navigation.goBack()} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: moderateScale(14) }}>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={"FirstName"} value={FirstName} onChangeText={(text) => setFirtstName(text)} />
            <View style={{ marginHorizontal: moderateScale(8) }} ></View>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={'LastName'} value={lastName} onChangeText={(text) => setlastName(text)} />
          </View>
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={'salon name'} value={salonName} onChangeText={(text) => setsalonName(text)} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={"Date Of Birth"} value={dob} onChangeText={(text) => setdob(text)} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={"Phone no."} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={"Email"} value={email} onChangeText={(text) => setEmail(text)} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: moderateScale(14), marginTop: moderateScale(28) }}>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={"Country"} />
            <View style={{ marginHorizontal: moderateScale(8) }} ></View>
            <TextInputWithLable inputStyle={{ flex: 1 }} lable={'Postal/ZipCode'} />
          </View>
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={'Address'} keyboardType={'email-address'} />
          <TextInputWithLable inputStyle={styless.lablecontainer} lable={'Refral Code'} />
          <TouchableOpacity style={styless.iconcontainer} onPress={() => setcheck(!ischeck)}>
            <MaterialCommunityIcons style={{ flex: 0.1 }} name={ischeck ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color="black" />
            <Text style={{ flex: 1 }}>By Logging in you, agree to NOOVOO's  Privacy Policy and Tearms of use</Text>
          </TouchableOpacity>
          <ButtonComp btnstyle={{ width: '90%', marginTop: moderateScale(24) }} btntext={'Continue'} onPressbtn={() =>navigation.navigate(NavgationStrings.SetPassword,{data:email})} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Register

const styless = StyleSheet.create({
  lablecontainer: { marginHorizontal: moderateScale(14), marginTop: moderateScale(28) },
  iconcontainer: {
    flexDirection: 'row', marginRight: moderateScale(12), paddingHorizontal: moderateVerticalScale(10),
    alignItems: 'center', marginTop: moderateScale(24), justifyContent: 'space-between',
    marginHorizontal: moderateScale(10)
  }
})