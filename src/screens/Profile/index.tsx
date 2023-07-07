import { ActivityIndicator, Button, Text, TouchableOpacity, View } from "react-native"
import { HeaderBar } from "../../components/HeaderBar"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { logout } from "../../firebase/authMethods";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";
import { RootState } from "../../types/RootState";
import { styles } from "./styles";
import { NewsSlider } from "../../components/NewsSlider";
import { useState } from "react";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;
interface ProfileProps {
  navigation: HomeScreenNavigationProp;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [loading, setLoading] = useState<boolean>(false);

  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  }

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: 'left_arrow'
  }

  const handleLogout = async () => {
    setLoading(true);
    await logout().then(() => {
      dispatch(removeUser());
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    });
    setLoading(false);
  };

  const data: Article[] = [
    {
      title: 'Title 1',
      description: 'Description 1',
      url: 'https://picsum.photos/200/300',
      urlToImage: 'https://picsum.photos/200/300',
      publishedAt: '2021-09-01T00:00:00Z',
      content: 'Content 1',
      author: 'Author 1',
      source: {
        id: '1',
        name: 'Source 1'
      }
    },
    {
      title: 'Title 1',
      description: 'Description 1',
      url: 'https://picsum.photos/200/300',
      urlToImage: 'https://picsum.photos/200/300',
      publishedAt: '2021-09-01T00:00:00Z',
      content: 'Content 1',
      author: 'Author 1',
      source: {
        id: '1',
        name: 'Source 1'
      }
    },
    {
      title: 'Title 1',
      description: 'Description 1',
      url: 'https://picsum.photos/200/300',
      urlToImage: 'https://picsum.photos/200/300',
      publishedAt: '2021-09-01T00:00:00Z',
      content: 'Content 1',
      author: 'Author 1',
      source: {
        id: '1',
        name: 'Source 1'
      }
    },
    {
      title: 'Title 1',
      description: 'Description 1',
      url: 'https://picsum.photos/200/300',
      urlToImage: 'https://picsum.photos/200/300',
      publishedAt: '2021-09-01T00:00:00Z',
      content: 'Content 1',
      author: 'Author 1',
      source: {
        id: '1',
        name: 'Source 1'
      }
    },
  ]

  return(
    <View style={styles.container}>
      <HeaderBar title={"Profile"} leftButton={headerLeftButton} />
      <Text style={styles.name}>{user?.displayName}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>Saved News</Text>
        <NewsSlider articles={data} onPressItem={() => {}} />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        {
          loading ? <ActivityIndicator color={'red'} size={"small"} /> : <Text style={{color:'red'}}>Logout</Text>
        }
        
      </TouchableOpacity>
    </View>
  )
}

export default Profile;