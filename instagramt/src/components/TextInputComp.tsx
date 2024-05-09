// import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
// import React, { useState } from 'react'
// import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
// import { Dimensions } from 'react-native';

// const TextInputComp = ({ content, onpress }) => {
//   const { width } = Dimensions.get('window');
//   const size = width;
//   const scale = useSharedValue(1);
//   const [text, SetText] = useState(null);

//   const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
//     onActive: (event) => {
//       scale.value = event.scale;
//     }
//   });


//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: scale.value }]
//     }
//   });
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//     >

//       <PinchGestureHandler onGestureEvent={pinchHandler}>
//         {/* Your modal content */}
//         <Animated.View style={[animatedStyle, { position: 'relative', backgroundColor: "#fff", padding: 20, borderRadius: 10, width: '60%', justifyContent: 'center' }]}>
//           <TextInput placeholder="Enter Text" onChangeText={(textt) => SetText(textt)} />
//           <TouchableOpacity onPress={onpress}>
//           </TouchableOpacity>
//         </Animated.View>

//       </PinchGestureHandler>
//     </Modal>

//   )
// }

// export default TextInputComp