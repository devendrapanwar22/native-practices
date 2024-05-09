import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  Canvas,
  useImage,
  Image,
  useCanvasRef,
} from "@shopify/react-native-skia";
import React, { useState } from "react";
import { Button, Dimensions, Share, TouchableOpacity, View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";

import type { Routes } from "../Routes";

import { ModalButton } from "./ModalButton";
import { ShareButton } from "./ShareButton";
import { useStickerContext } from "./StickerContext";
import { GestureHandler } from "./GestureHandler";
import Textcomp from "../components/Textcomp";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const iconSize = 64;

type ParamListBase = {
  Instagram: { imageSource: string };
};

export const Instagram = () => {

  const { width } = Dimensions.get('window');
  const size = width;
  const scale = useSharedValue(1);
  const prevscale = useSharedValue(1);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  let prevTranslateX = useSharedValue(translateX.value);
  let prevTranslateY = useSharedValue(translateY.value);
  const [content, setcontent] = useState(null)

  const [mytext, setmyText] = useState(null);

  // type contextInterface = {
  //   translateX: number;
  //   translateY: number;
  // }

  // const panHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, contextInterface>({
  //   onStart: (event, context) => {
  //     context.translateX = translateX.value;
  //     context.translateY = translateY.value
  //   },
  //   onActive: (event, context) => {
  //     translateX.value = event.translationX + context.translateX
  //     translateY.value = event.translationY + context.translateY
  //   }
  // });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: translateX.value
      },
      {
        translateY: translateY.value
      },
      { scale: scale.value }
      ],


    }
  });
  const [modalVisible, setModalVisible] = useState(false);



  const onPress = () => {
    setModalVisible(!modalVisible);
  };

  // const route = useRoute();
  const route = useRoute<RouteProp<ParamListBase, "Instagram">>();
  const img = route.params.imageSource;
  console.log('.....', img)
  const ref = useCanvasRef();
  const { stickers } = useStickerContext();
  const { navigate } = useNavigation<StackNavigationProp<Routes>>();
  const image = useImage(img);
  if (!image) {
    return null;
  }
  const pan = Gesture.Pan().onChange((event) => {
    translateX.value = event.translationX + prevTranslateX.value
    translateY.value = event.translationY + prevTranslateY.value
  }).onStart(() => {
    prevTranslateX.value = translateX.value;
    prevTranslateY.value = translateY.value
  });

  const pinch = Gesture.Pinch()
    .onStart(() => {
      prevscale.value = scale.value;
    })
    .onChange((event) => {
      scale.value = prevscale.value * event.scale;
    });
  const gesture = Gesture.Race(pan, pinch);

  const deleteSticket = () => {
    stickers.pop();
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }} ref={ref}>
        <Image
          image={image}
          x={0}
          y={0}
          width={width}
          height={height}
          fit="cover"
        />
        {stickers.map(({ Sticker, matrix }, index) => {
          return <Sticker key={index} matrix={matrix} />;
        })}
      </Canvas>
      {stickers.map(({ size, matrix }, index) => {
        return <GestureHandler key={index} matrix={matrix} size={size} />;
      })}

      <ModalButton size={iconSize} onPress={() => navigate("StickerModal")} />
      <Textcomp iconSize={iconSize} onPress={onPress} />
      <ShareButton
        size={iconSize}
        onPress={() => {
          const img = ref.current!.makeImageSnapshot().encodeToBase64();
          const data = `data:image/png;base64,${img}`;
          Share.share({ url: data });
        }}
      />
      {modalVisible ?

        <View style={styles.overlay}>
          <GestureDetector gesture={gesture}>
            {
              content ? <Animated.View style={[animatedStyle, { position: 'relative', flexDirection: 'row', backgroundColor: "#rgba(0,0,0,0.5)", padding: 20, borderRadius: 10, width: '60%', justifyContent:'space-around'}]}>

                <Text style={{ fontSize: 20, paddingVertical: 10, color: '#fff' }}> {mytext}</Text>
                <MaterialCommunityIcons name="alpha-x" size={30} color={'#fff'} onPress={() => { setmyText(null), setcontent(null) }} />
                <MaterialCommunityIcons name="alpha-x" size={30} color={'#fff'} />

              </Animated.View> : <Animated.View style={[animatedStyle, { position: 'relative', backgroundColor: "#rgba(0,0,0,0.5)", padding: 20, borderRadius: 10, width: '60%', justifyContent: 'center' }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <MaterialCommunityIcons name="alpha-x" size={30} color={'#fff'} onPress={onPress} />
                  <MaterialCommunityIcons name="check" size={25} color={'#fff'} onPress={() => setcontent(mytext)} />
                </View>

                <TextInput onChangeText={newtext => setmyText(newtext)} placeholderTextColor={'#fff'} placeholder="Enter Text" style={{ alignSelf: 'center', fontSize: 25, color: '#fff' }} />
                <TouchableOpacity onPress={onPress}>
                </TouchableOpacity>
              </Animated.View>
            }
          </GestureDetector>

        </View> : null
      }

      <Button title="camera" onPress={() => deleteSticket()} />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});