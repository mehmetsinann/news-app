import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { HeaderBar } from "../../components/HeaderBar";
import { RouteProp } from "@react-navigation/native";
import {styles} from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import moment from "moment";

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
  const publishDate = moment(route.params.article.publishedAt).format('DD MMMM YYYY - HH:mm');
  const { title, urlToImage, content, description } = route.params.article;

  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  }

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: 'left_arrow'
  };

  const headerRightButtonOnPress = () => {}

  const headerRightButton = {
    onPress: headerRightButtonOnPress,
    icon: 'save'
  }

  const goToNew = () => {
    navigation.navigate('Modal', { article: route.params.article });
  }

  console.log(urlToImage)
  // TODO :: for the save button on the right check if the user is logged in, if not the button should not appear
  return (
    <View>
      <HeaderBar title={route.params.article.title} leftButton={headerLeftButton} rightButton={headerRightButton} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.publishedAt}>{publishDate}</Text>
        <Image style={styles.image} source={{ uri: urlToImage }} />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.content}>{content.split("[")[0]}</Text>
        <Text style={styles.readMore}>Click the 'Go to New' button below to read the rest of the new</Text>
        <TouchableOpacity onPress={goToNew} style={styles.goToNewButton}>
          <Text>Go to New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsDetail;