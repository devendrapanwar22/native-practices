import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { useNavigation } from '@react-navigation/native'
import NavgationStrings from '../../constants/NavgationStrings'
import ButtonComp from '../../Components/ButtonComp'
import styles from '../../constants/Style/styles'
import { moderateScale, scale } from 'react-native-size-matters'

const ChooseAccount = ({ }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: moderateScale(1) }}>
                <HeaderComp onPressback={() => navigation.navigate(NavgationStrings.Login)} />
            </View>
            <View style={styless.container}>

                <Text style={styless.headingtext}>Choose Your Account Type</Text>
                <Image style={styless.imgstyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZYOJayx58Ck7t3KzS_p4iIvRDuAdx0H9lbVUVzz60w&s' }}></Image>
                <Image style={styless.imgstyle} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219969.png' }}></Image>
                <ButtonComp btntext={'Continue'} btnstyle={{ width: '80%' }} onPressbtn={() => navigation.navigate(NavgationStrings.Register)} />
            </View>

        </SafeAreaView>
    )
}

export default ChooseAccount

const styless = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center",
        width: "100%",
        paddingHorizontal: moderateScale(24),
    },
    headingtext: {
        fontSize: scale(24),
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    imgstyle: {
        height: moderateScale(100),
        width: moderateScale(100)
    }
})