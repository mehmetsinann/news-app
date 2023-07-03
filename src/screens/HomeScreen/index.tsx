import React from "react";
import { View } from "react-native";

import { HeaderBar } from "../../components/HeaderBar";
import { TopHeadlineCard } from "../../components/TopHeadlineCard";

import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native";

const HomeScreen:React.FC = () => {
  const navigation = useNavigation<any>();

  const headerRightButtonOnPress = () => {
    navigation.navigate("Profile");
  };

  const headerRightButton = {
    onPress: headerRightButtonOnPress,
    icon: 'user'
  };

  const goToDetail = () => {
    navigation.navigate("Detail", {
      article: {
        title: "Title",
        description: "Description",
        url: "https://google.com"
      }
    })
  }

  return (
    <View style={styles.container}>
      <HeaderBar title={"Home"} rightButton={headerRightButton} />
      <TopHeadlineCard article={{title: "Title", description: "Description", url: "https://google.com"}} onPress={goToDetail} />
    </View>
  );
};

export default HomeScreen;
