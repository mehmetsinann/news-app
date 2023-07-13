import React from "react";
import { ActivityIndicator, TouchableOpacity, Text, View } from "react-native";

import { NewCard } from "../NewCard";

import { styles } from "./styles";

interface NewsContainerProps {
  articles: Article[];
  onPressItem: (item: Article) => void;
  loading: boolean;
  getAllNews: () => void;
}

export const NewsContainer: React.FC<NewsContainerProps> = ({
  articles,
  onPressItem,
  loading,
  getAllNews,
}) => {
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getAllNews}
          style={styles.loadMoreBtn}
        >
          {loading ? (
            <ActivityIndicator color="black" style={{ alignSelf: "center" }} />
          ) : (
            <Text style={styles.btnText}>Load More</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      {articles.map((article: Article, index: number) => (
        <NewCard
          article={article}
          key={index}
          onPress={() => {
            onPressItem(article);
          }}
        />
      ))}
      {renderFooter()}
    </View>
  );
};
