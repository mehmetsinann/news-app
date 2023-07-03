import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import NewsDetail from "../screens/NewsDetail";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={NewsDetail} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Navigation;
