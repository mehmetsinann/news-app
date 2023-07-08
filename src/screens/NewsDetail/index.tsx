import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Toast } from "react-native-toast-message/lib/src/Toast";

import moment from "moment";

import { addNewToSavedArticles, removeNewFromSavedArticles } from "../../redux/slices/userSlice";

import { RootState } from "../../types/RootState";
import { addNewToSaved, deleteNewFromSaved } from "../../firebase/newsMethods";

import { HeaderBar } from "../../components/HeaderBar";

import {styles} from "./styles";

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
  const user = useSelector((state: RootState) => state.user.user);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const dispatch = useDispatch();

  const headerLeftButtonOnPress = () => {
    navigation.goBack();
  }

  const headerLeftButton = {
    onPress: headerLeftButtonOnPress,
    icon: 'left_arrow'
  };

  const headerRightButtonOnPress = async () => {
    if(user?.uid) {
      !isSaved ? (
        await addNewToSaved(route.params.article, user?.uid).then(() => {
          dispatch(addNewToSavedArticles(route.params.article));
          setIsSaved(true);
          showSavedToast();
        })
      ) : (
        await deleteNewFromSaved(route.params.article, user?.uid).then(() => {
          dispatch(removeNewFromSavedArticles(route.params.article));
          setIsSaved(false);
          showRemovedToast();
        })
      );
      
    }
  };

  const headerRightButton = {
    onPress: headerRightButtonOnPress,
    icon: isSaved ? 'delete' : 'save'
  }

  const goToNew = () => {
    navigation.navigate('Modal', { article: route.params.article });
  }

  const showSavedToast: () => void = () => {
    Toast.show({
      type: 'success',
      text1: 'New saved',
      text2: 'The new has been saved successfully',
      visibilityTime: 2000,
      position: 'top',
      topOffset: 60
    });
  }

  const showRemovedToast: () => void = () => {
    Toast.show({
      type: 'error',
      text1: 'New removed',
      text2: 'The new has been removed successfully',
      visibilityTime: 2000,
      position: 'top',
      topOffset: 60
    });
  };

  const isSavedArticle = () => {
    if(user?.uid) {
      const savedNews = user?.savedArticles;
      if(savedNews) {
        const saved = savedNews.find((article: Article) => article.title === route.params.article.title);
        if(saved) {
          setIsSaved(true);
        }
      }
    }
  };

  useEffect(() => {
    isSavedArticle();
  }, [])

  return (
    <View>
      <HeaderBar title={route.params.article.title} leftButton={headerLeftButton} rightButton={user ? headerRightButton : null} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.publishedAt}>{publishDate}</Text>
          <Text style={styles.publishedAt}>{route.params.article.author}</Text>
        </View>
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