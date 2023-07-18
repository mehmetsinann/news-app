import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";

import { NewCard } from "../NewCard";

import { screenWidth } from "../../constants/screenDimensions";

import { styles } from "./styles";

interface TopHeadlineSliderProps {
  articles: Article[];
  onPressItem: (item: Article) => void;
}

export const NewsSlider: React.FC<TopHeadlineSliderProps> = ({
  articles,
  onPressItem,
}) => {
  const carouselRef = React.useRef(null);

  const renderItem: (item: Article, index: number) => JSX.Element = (
    item: Article,
    index: number
  ) => {
    return (
      <NewCard
        article={item}
        key={index}
        onPress={() => {
          onPressItem(item);
        }}
        testID={`new-card-${index}`}
      />
    );
  };

  return (
    <View style={styles.container} testID="news-slider">
      <Carousel
        ref={carouselRef}
        data={articles}
        renderItem={({ item, index }) => renderItem(item, index)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        testID="carousel-component"
        autoplay={true}
        loop={true}
        autoplayInterval={5000}
        autoplayDelay={1500}
      />
    </View>
  );
};
