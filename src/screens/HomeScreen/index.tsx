import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { RootState } from "../../types/RootState";

import { HeaderBar } from "../../components/HeaderBar";
import { NewsSlider } from "../../components/NewsSlider";
import { NewsContainer } from "../../components/NewsContainer";
import { Icon } from "../../components/Icon";

import { getHeadlineNews, getNews } from "../../services/dataManager";

import { styles } from "./styles";
import { lang } from "moment";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [news, setNews] = useState<Article[]>([]);
  const [topHeadlineNews, setTopHeadlineNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const options = useSelector((state: RootState) => state.filter.options);

  const user = useSelector((state: RootState) => state.user.user);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 100;
    if (offsetY >= threshold) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    scrollViewRef.current &&
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const getAllNews = () => {
    setLoading(true);
    getNews(
      currentPage,
      options.keyword || undefined,
      options.orderBy || undefined
    )
      .then((_news) => {
        setNews([...news, ..._news]);
        setCurrentPage((parseInt(currentPage) + 1).toString());
      })
      .finally(() => {
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
    if (user) navigation.navigate("Profile");
    else navigation.navigate("Auth");
  };

  const headerRightButton = {
    onPress: headerRightButtonOnPress,
    icon: user ? "user" : "login",
  };

  const headerLeftButtonOnPress = () => {
    navigation.navigate("Filter");
  };

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: "filter",
  };

  const goToDetail = (article: Article) => {
    article.content && article.description
      ? navigation.navigate("Detail", { article })
      : navigation.navigate("Modal", { article });
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        title={"Home"}
        rightButton={headerRightButton}
        leftButton={headerLeftButton}
      />
      <ScrollView
        style={styles.container}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Headline News</Text>
          {/* <Text style={styles.options}>
            {options.keyword ? `Keyword: ${options.keyword}` : ""}
          </Text> */}
        </View>
        <NewsSlider articles={topHeadlineNews} onPressItem={goToDetail} />
        <View
          style={{
            width: "93%",
            height: 2,
            backgroundColor: "lightgrey",
            alignSelf: "center",
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>News</Text>
          <Text style={styles.keyword}>{`${options.keyword}`}</Text>
        </View>
        <NewsContainer
          articles={news}
          onPressItem={goToDetail}
          loading={loading}
          getAllNews={getAllNews}
        />
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
