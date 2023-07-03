import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { NewCard } from '../NewCard';

import { styles } from './styles';

interface NewsContainerProps {
  articles: Article[];
  onPressItem: (item: Article) => void;
}

export const NewsContainer: React.FC<NewsContainerProps> = ({ articles, onPressItem }) => {
  return (
    <View>
      <Text style={styles.title}>News</Text>
      {articles.map((article:Article, index:number) => (
          <NewCard article={article} key={index} onPress={() => {onPressItem(article)}} />
        )
      )}
    </View>
  )
};