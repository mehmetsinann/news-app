import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HeaderBar } from "../../components/HeaderBar";
import { TopHeadlineSlider } from "../../components/TopHeadlineSlider";
import { NewsContainer } from "../../components/NewsContainer";

import { getHeadlineNews, getNews } from "../../services/dataManager";

import { styles } from "./styles";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Icon } from "../../components/Icon";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const scrollViewRef = React.useRef<ScrollView>(null); // ScrollView'e referans oluşturmak için useRef kullanılıyor
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Başa dön butonunun görünürlüğünü yönetmek için useState kullanılıyor

  const handleScroll = (event:any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 100; 
    if (offsetY >= threshold) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    scrollViewRef.current && scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const getAllNews = () => {
    setLoading(true);
    getNews(currentPage).then((_news) => {
      setNews([...news, ..._news]);
      setCurrentPage((parseInt(currentPage) + 1).toString());
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllNews();   
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
      <ScrollView style={styles.container} ref={scrollViewRef} onScroll={handleScroll}>
        <TopHeadlineSlider articles={topHeadlineNews} onPressItem={goToDetail} />
        <View style={{width: "93%", height: 2, backgroundColor: 'lightgrey', marginBottom: 12, alignSelf: 'center' }} />
        <NewsContainer articles={news} onPressItem={goToDetail} loading={loading} getAllNews={getAllNews} />
      </ScrollView>
      {showScrollToTop ? (
        <TouchableOpacity onPress={scrollToTop} style={styles.goToTopButton}>
          <Icon name="up_arrow" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default HomeScreen;
