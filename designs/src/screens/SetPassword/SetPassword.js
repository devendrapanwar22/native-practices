import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from '../../constants/Style/styles'
import TextInputWithLable from '../../Components/TextInputWithLable'
import { moderateScale } from 'react-native-size-matters'
import HeaderComp from '../../Components/HeaderComp'
import ButtonComp from '../../Components/ButtonComp'
import NavgationStrings from '../../constants/NavgationStrings'

const SetPassword = ({ navigation }) => {
  const [isActive, setActive] = useState(false)
  const image = true;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComp onPressback={() => navigation.navigate(NavgationStrings.Register)} />
      <View style={{ flex: 1, paddingHorizontal: moderateScale(24) }}>
        <Text style={styles.headingtext}>Set Password</Text>
        <Text style={styles.settextstylenormal}>Set Password for your new account <Text style={styles.settextstyle}>(+33) 34 56 78 901</Text></Text>
        <TextInputWithLable lable={'SetPassword'} placeHolder={"Enter your password"} secureTextEntry={isActive} onpressright={() => setActive(!isActive)} righticon={isActive ? 'eye' : 'eye-off'} inputStyle={{ marginVertical: moderateScale(50) }} />
        <ButtonComp btntext={'Continue'} btnstyle={{ width: '100%' }} onPressbtn={() => navigation.navigate(NavgationStrings.Home)} />
        <View style={styless.btncontainer}>
          <ButtonComp onPressbtn={() => navigation.navigate(NavgationStrings.Home)} image={image} btnstyle={{ height: moderateScale(56), width: moderateScale(56), borderRadius: moderateScale(56 / 2), alignSelf: 'flex-end' }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SetPassword

const styless = StyleSheet.create({
  btncontainer: { justifyContent: 'flex-end', flexDirection: 'row', marginTop: moderateScale(24) }
})
