import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";
import moment from "moment";

interface NewCardProps {
  article: Article;
  onPress: () => void;
}

export const NewCard:React.FC<NewCardProps> = React.memo(({ article, onPress }) => {
  const publishDate = moment(article.publishedAt).format('DD MMMM YYYY - HH:mm');
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: article?.urlToImage}} style={styles.bgImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.publishDate}>{publishDate}</Text>
          <Text style={styles.articleTitle} numberOfLines={2}>{article.title}</Text>
          <Text style={styles.articleDescription} numberOfLines={3}>{article.description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
});