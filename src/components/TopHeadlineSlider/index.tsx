import React from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { NewCard } from '../NewCard';

import { screenWidth } from '../../constants/screenDimensions';

import { styles } from './styles';

interface TopHeadlineSliderProps {
  articles: Article[];
  onPressItem: (item: Article) => void;
}

export const TopHeadlineSlider: React.FC<TopHeadlineSliderProps> = ({ articles, onPressItem }) => {
  const carouselRef = React.useRef(null);

  const renderItem: (item: Article, index: number) => JSX.Element = (item:Article,index:number) => {
    return(
      <NewCard article={item} key={index} onPress={() => {onPressItem(item)}} />
    )
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Headline News</Text>
      <Carousel
        ref={carouselRef}
        data={articles}
        renderItem={
          ({item, index}) => renderItem(item, index)
        }
        sliderWidth={screenWidth}
        itemWidth={screenWidth-80}
      />
    </View>
  )
}