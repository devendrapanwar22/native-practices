import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import type { Routes } from "./src/Routes";
import {
  ColorSchemeProvider,
  LoadAssets,
  darkTheme,
  theme,
  useColorScheme,
} from "./src/components";
import { Instagram, StickerModal } from "./src/Instagram";
import { StickerProvider } from "./src/Instagram/StickerContext";
import Ecam from "./src/components/Ecam";
import { useFonts } from "expo-font";

const fonts = {
  SFProDisplayBold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  SFProTextRegular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};
const assets: number[] = []; // Add your asset paths here

const Stack = createStackNavigator<Routes>();

const AppNavigator = () => {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Stack.Navigator initialRouteName="Ecam">
      <Stack.Screen
          name="Ecam"
          component={Ecam}
          options={{
            title: "ecam",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Instagram"
          component={Instagram}
          options={{
            title: "📸 Instagram",
            headerShown: false,
          }}
        />

          <Stack.Screen
            name="StickerModal"
            component={StickerModal}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

const App = () => {
  let [fontsLoaded] = useFonts({});

  if (!fontsLoaded) {
    // Font loading indicator or fallback UI can be placed here
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ColorSchemeProvider>
        <LoadAssets assets={assets} fonts={fonts}>
          <StickerProvider>
            <AppNavigator />
          </StickerProvider>
        </LoadAssets>
      </ColorSchemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
