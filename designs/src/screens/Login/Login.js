import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../../constants/Style/styles';
import TextInputWithLable from '../../Components/TextInputWithLable';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ButtonComp';
import NavigationStrions from '../../constants/NavgationStrings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Authcontext } from '../../Nativation/Authcontext/Authcontext';
const Login = () => {
    const navigation = useNavigation();
    const [isvisible, setvisible] = useState(true)
    const {login} = useContext(Authcontext);
    const [email,setEmail]= useState('');
    const [password,SetPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>
                <ImageBackground style={styles.imgStyle} source={{ uri: "https://img.freepik.com/free-photo/cute-baby-home-bed_624325-1748.jpg" }}>
                    <Text style={styles.textStyle}>Login</Text>
                </ImageBackground>
                <View style={styles.mainstyle}>
                    <TextInputWithLable value={email} onChangeText={(text)=>setEmail(text)} lable={"Email"} inputStyle={{ marginBottom: moderateVerticalScale(28) }} keyboardType='email-address' secureTextEntry={false}
                        onpressright={() => setvisible(!isvisible)} />
                    <TextInputWithLable lable={"password"} value={password} onChangeText={(text)=> SetPassword(text)} secureTextEntry={isvisible} righticon={isvisible ? 'eye-off' : 'eye'} onpressright={() => setvisible(!isvisible)} />

                    <TouchableOpacity onPress={() => navigation.navigate(NavigationStrions.ForgetPassword)} style={{ alignSelf: "flex-end", marginTop: moderateVerticalScale(20) }}>
                        <Text style={{ color: '#89D6CE' }}>Forget password</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1, marginTop: moderateVerticalScale(30) }}>
                        <ButtonComp btntext={"Login"} btnstyle={{ width: '100%' }} onPressbtn={() => {login(email,password)}} />
                    </View>
                </View>

                <View style={styless.textcontainer}>
                    <Text>Already have account </Text>
                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={() => navigation.navigate(NavigationStrions.Register)}>
                        <Text style={{ color: 'blue' }}>sign up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>
    )
}

export default Login


const styless = StyleSheet.create({
    textcontainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: moderateVerticalScale(50) }
})
