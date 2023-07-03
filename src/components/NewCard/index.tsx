import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";

interface NewCardProps {
  article: Article;
  onPress: () => void;
}

export const NewCard:React.FC<NewCardProps> = React.memo(({ article, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleDescription}>{article.description}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
});