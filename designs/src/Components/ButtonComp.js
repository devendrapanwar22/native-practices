import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import styles from '../constants/Style/styles'
import { useNavigation } from '@react-navigation/native'
import NavgationStrings from '../constants/NavgationStrings'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const ButtonComp = ({
    btntext,
    btnstyle = {},
    onPressbtn = {},
    image,
    btntextstyle={}
}) => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: moderateScale(25), alignItems: 'center', width: '100%' }}>
            <TouchableOpacity style={{ ...styles.btnStyle, ...btnstyle }} onPress={onPressbtn}>
                {
                    image ? <MaterialCommunityIcons name={'arrow-right'} size={40} color="#fff" />
                        : <Text style={{...styles.btntextstyle,...btntextstyle}}>{btntext}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComp


