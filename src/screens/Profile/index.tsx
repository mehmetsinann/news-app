import { Text, View } from "react-native"
import { HeaderBar } from "../../components/HeaderBar"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;
interface ProfileProps {
  navigation: HomeScreenNavigationProp;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  }

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: 'left_arrow'
  }

  return(
    <View>
      <HeaderBar title={"Profile"} leftButton={headerLeftButton} />
      <Text>Profile Screen</Text>
    </View>
  )
}

export default Profile;