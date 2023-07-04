import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HeaderBar } from "../../components/HeaderBar";
import { TopHeadlineSlider } from "../../components/TopHeadlineSlider";
import { NewsContainer } from "../../components/NewsContainer";

import { getHeadlineNews, getNews } from "../../services/dataManager";

import { styles } from "./styles";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen:React.FC<HomeScreenProps> = ({ navigation }) => {
  const [news, setNews] = useState<Article[]>([]);
  const [topHeadlineNews, setTopHeadlineNews] = useState<Article[]>([]);

  useEffect(() => {
    getNews().then((_news) => {
      setNews(_news);
    });
    getHeadlineNews().then((_topHeadlineNews) => {
      setTopHeadlineNews(_topHeadlineNews);
    });
  }, []);

  const headerRightButtonOnPress = () => {
    navigation.navigate("Profile");
  };

  const headerRightButton = {
    onPress: headerRightButtonOnPress,
    icon: 'user'
  };

  const goToDetail = (article: Article) => {
    article.content && article.description ? navigation.navigate("Detail", {article}) : navigation.navigate("Modal", {article});
  };

  return (
    <View style={styles.container}>
      <HeaderBar title={"Home"} rightButton={headerRightButton} />
      <ScrollView style={styles.container}>
        <TopHeadlineSlider articles={topHeadlineNews} onPressItem={goToDetail} />
        <View style={{width: "93%", height: 2, backgroundColor: 'lightgrey', marginBottom: 12, alignSelf: 'center' }} />
        <NewsContainer articles={news} onPressItem={goToDetail} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
