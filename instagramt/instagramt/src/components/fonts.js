// import React, { useState, useEffect } from 'react';

// import { Text, View, StyleSheet } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import {
//     useFonts,
//     Inter_100Thin,
//     Inter_200ExtraLight,
//     Inter_300Light,
//     Inter_400Regular,
//     Inter_500Medium,
//     Inter_600SemiBold,
//     Inter_700Bold,
//     Inter_800ExtraBold,
//     Inter_900Black,
// } from '@expo-google-fonts/inter';


// export default () => {
//     let [fontsLoaded] = useFonts({
//         Inter_100Thin:'Inter_100Thin',
//         Inter_200ExtraLight:'Inter_200ExtraLight',
//         Inter_300Light:'Inter_300Light',
//         Inter_400Regular:'Inter_400Regular',
//         Inter_500Medium:'Inter_500Medium',
//         Inter_600SemiBold:'Inter_600SemiBold',
//         Inter_700Bold:'Inter_700Bold',
//         Inter_800ExtraBold:'Inter_800ExtraBold',
//         Inter_900Black:'Inter_900Black'
//     });

//     let fontSize = 24;
//     let paddingVertical = 6;

//     if (!fontsLoaded) {
//         return <AppLoading />;
//     } else {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_100Thin',
//                     }}>
//                     Inter Thin
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_200ExtraLight',
//                     }}>
//                     Inter Extra Light
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_300Light',
//                     }}>
//                     Inter Light
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_400Regular',
//                     }}>
//                     Inter Regular
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_500Medium',
//                     }}>
//                     Inter Medium
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_600SemiBold',
//                     }}>
//                     Inter Semi Bold
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_700Bold',
//                     }}>
//                     Inter Bold
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_800ExtraBold',
//                     }}>
//                     Inter Extra Bold
//                 </Text>

//                 <Text
//                     style={{
//                         fontSize,
//                         paddingVertical,
//                         // Note the quoting of the value for `fontFamily` here; it expects a string!
//                         fontFamily: 'Inter_900Black',
//                     }}>
//                     Inter Black
//                 </Text>
//             </View>
//         );
//     }
// };