import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from '../constants/Style/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TextInputWithLable = ({
    lable,
    value,
    placeHolder,
    onChangeText,
    inputStyle={},
    keyboardType,
    righticon,
    onpressright,
    ...props
}) => {
    return (
        <View style={{...styles.inpurcontainer,...inputStyle}}>
            <Text style={styles.LableTextStyle}>{lable}</Text>
            <View style={{flexDirection:'row',flexWrap:"wrap",justifyContent:"space-between"}}>
            <TextInput onChangeText={onChangeText} value={value} style={{flex:1}} placeholder={placeHolder} keyboardType={keyboardType} {...props} />
            <MaterialCommunityIcons name={righticon} size={24} color="black" onPress={onpressright}/>
            </View>
        </View>
    )
}

export default TextInputWithLable

