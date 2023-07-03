import React from "react";
import { ScrollView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { HeaderBar } from "../../components/HeaderBar";
import { TopHeadlineSlider } from "../../components/TopHeadlineSlider";
import { NewsContainer } from "../../components/NewsContainer";

import { styles } from "./styles"


type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen:React.FC<HomeScreenProps> = ({ navigation }) => {
  const headerRightButtonOnPress = () => {
    navigation.navigate("Profile");
  };

  const headerRightButton = {
    onPress: headerRightButtonOnPress,
    icon: 'user'
  };

  const goToDetail = (article:Article) => {
    navigation.navigate("Detail", {article})
  }

  const news: Article[] = [
    {
      title: "Title 1",
      description: "Description 1",
      url: "https://google.com"
    },
    {
      title: "Title 2",
      description: "Description 2",
      url: "https://google.com"
    },
    {
      title: "Title 3",
      description: "Description 3",
      url: "https://google.com"
    },
    {
      title: "Title 4",
      description: "Description 3",
      url: "https://google.com"
    },
    {
      title: "Title 5",
      description: "Description 3",
      url: "https://google.com"
    },
    {
      title: "Title 6",
      description: "Description 3",
      url: "https://google.com"
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderBar title={"Home"} rightButton={headerRightButton} />
      <ScrollView style={styles.container}>
        <TopHeadlineSlider articles={news} onPressItem={goToDetail} />
        <View style={{width: "100%", height: 2, backgroundColor: 'gray', marginBottom: 12 }} />
        <NewsContainer articles={news} onPressItem={goToDetail} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
