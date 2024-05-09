import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Textcomp = ({ iconSize, onPress }) => {
    const insets = useSafeAreaInsets();


    return (
            <TouchableOpacity style={{
                position: "absolute",
                top: insets.top + 16,
                left: 150,
                width: iconSize,
                height: iconSize,
                borderRadius: iconSize / 2,
                backgroundColor: "#222121",
                justifyContent: "center",
                alignItems: "center"
            }} onPress={onPress}>
                <MaterialCommunityIcons name="format-color-text" size={25} color={'#fff'} />
            </TouchableOpacity>
    )
}

export default Textcomp

const styles = StyleSheet.create({})