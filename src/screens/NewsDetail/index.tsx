import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { HeaderBar } from "../../components/HeaderBar";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

interface NewsDetailProps {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ navigation, route }) => {
  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  }

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: 'left_arrow'
  };
  return (
    <View>
      <HeaderBar title={"Detail"} leftButton={headerLeftButton} />
      <Text>NewsDetail Screen</Text>
      <Text>{route.params.article.title}</Text>
      <Text>{route.params.article.description}</Text>
      <Text>{route.params.article.url}</Text>
    </View>
  );
};

export default NewsDetail;