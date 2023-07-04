import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";

interface NewCardProps {
  article: Article;
  onPress: () => void;
}

export const NewCard:React.FC<NewCardProps> = React.memo(({ article, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: article?.urlToImage}} style={styles.bgImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.articleTitle} numberOfLines={2}>{article.title}</Text>
          <Text style={styles.articleDescription} numberOfLines={3}>{article.description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
});