import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import NewsDetail from "../screens/NewsDetail";
import Profile from "../screens/Profile";
import WebViewScreen from "../screens/WebView";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={NewsDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
        <Stack.Screen name="Modal" component={WebViewScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
