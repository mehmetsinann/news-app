import { StatusBar } from "expo-status-bar";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { registerRootComponent } from "expo";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <Navigation />
          <StatusBar style="light" />
          <Toast />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent("main", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
