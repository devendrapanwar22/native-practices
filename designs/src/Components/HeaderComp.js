import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'

const HeaderComp = ({
    onPressback={},
  
}) => {
    const navigation = useNavigation();
    return (
        <View style={{ height:moderateScale(44),justifyContent:'flex-start',flexDirection:'row',alignItems:'center',paddingHorizontal:moderateScale(24)}}>
            <TouchableOpacity onPress={onPressback?onPressback:()=>navigation.goBack}>
                <MaterialCommunityIcons name="arrow-left" size={24} color="black"  />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({})