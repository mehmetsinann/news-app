import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootState } from "../../types/RootState";

import { logout } from "../../firebase/authMethods";
import { getSavedNewsData } from "../../firebase/newsMethods";

import { removeUser } from "../../redux/slices/userSlice";

import { HeaderBar } from "../../components/HeaderBar"
import { NewsSlider } from "../../components/NewsSlider";

import { styles } from "./styles";


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
  const [savedNews, setSavedNews] = useState<Article[]>([]);

  useEffect(() => {
    getSavedNewsData(user?.uid).then((_news: Article[] | undefined) => {
      _news && setSavedNews(_news);
    });
  }, [user]);

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

  const handleNewsItemPress = (article: Article) => {
    navigation.navigate('Detail', { article });
  };

  return(
    <View style={styles.container}>
      <HeaderBar title={"Profile"} leftButton={headerLeftButton} />
      <Text style={styles.name}>{user?.displayName}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>Saved News ({savedNews?.length})</Text>
        {
          savedNews.length > 0 ? <NewsSlider articles={savedNews} onPressItem={handleNewsItemPress} /> : <Text style={styles.noNews}>There is no saved news</Text>
        }
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