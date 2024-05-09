import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
// import NavigationString from '../../constants/NavigationString';
import * as FileSystem from 'expo-file-system';


const Ecam = () => {
  const isFocused = useIsFocused(); // Hook to check if screen is focused
  const navigation = useNavigation();
  const camera = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [imageSource, setImageSource] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    const initCamera = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    initCamera();
  }, []);

  useEffect(() => {
    if (isFocused) {
      setCameraReady(false);
    }
  }, [isFocused]);

  useEffect(() => {
    handleback()
  }, [navigation]);

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const toggleFlashMode = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };


   const handleback = () => {
  
      setImageSource(null),
      handleCameraReady()
  }



  const takePicture = async () => {
    if (camera.current && cameraReady) {
      try {
        const photo = await camera.current.takePictureAsync();
        console.log(photo.uri)

        setImageSource(photo.uri);
        navigation.navigate('Instagram', { imageSource: photo.uri })
        console.log('....uiur', imageSource)
        handleCameraReady();
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        type={type}
        flashMode={flash}
        ref={camera}
        autoFocus={true}
        onCameraReady={handleCameraReady}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleFlashMode}>
          <Image
            style={{ width: 20, height: 20 }}
            source={flash === Camera.Constants.FlashMode.off
              ? require('../../assets/flashoff.png')
              : require('../../assets/flashoff.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleCameraType}>
          <Image
            style={{ width: 20, height: 20 }}
            source={type === Camera.Constants.Type.back
              ? require('../../assets/front.png')
              : require('../../assets/front.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={takePicture}>
          <View style={styles.captureButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#fff',
    borderWidth: 3,
  },
});

export default Ecam;


