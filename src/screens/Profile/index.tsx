import { Text, View } from "react-native"
import { HeaderBar } from "../../components/HeaderBar"

interface ProfileProps {
  navigation: any;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  }

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: 'back'
  }

  return(
    <View>
      <HeaderBar title={"Profile"} leftButton={headerLeftButton} />
      <Text>Profile</Text>
    </View>
  )
}

export default Profile;