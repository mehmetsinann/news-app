import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HeaderBar } from "../../components/HeaderBar";
import { primaryColor } from "../../constants/appColors";

type ModalScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Modal"
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "Modal">;

interface WebViewScreenProps {
  navigation: ModalScreenNavigationProp;
  route: ModalScreenRouteProp;
}

const WebViewScreen: React.FC<WebViewScreenProps> = ({ route, navigation }) => {
  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  };

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: "left_arrow",
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBar
        title={`${route.params.article.title}`}
        leftButton={headerLeftButton}
        backgroundColor={primaryColor}
      />
      <WebView
        source={{ uri: route.params.article.url }}
        originWhitelist={["*"]}
      />
    </SafeAreaView>
  );
};

export default WebViewScreen;
