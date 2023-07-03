import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";

interface TopHeadlineCardProps {
  article: Article;
  onPress: () => void;
}

export const TopHeadlineCard:React.FC<TopHeadlineCardProps> = ({ article, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleDescription}>{article.description}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
};