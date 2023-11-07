import React from "react";
import { ActivityIndicator, View } from "react-native";
import Carousel from "react-native-snap-carousel-v4";

import { NewCard } from "../NewCard";

import { screenWidth } from "../../constants/screenDimensions";

import { styles } from "./styles";

interface TopHeadlineSliderProps {
  articles: Article[];
  loading: boolean;
  onPressItem: (item: Article) => void;
}

export const NewsSlider: React.FC<TopHeadlineSliderProps> = ({
  articles,
  loading,
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
      {loading ? (
        <ActivityIndicator
          color="black"
          style={{ alignSelf: "center" }}
          testID="loading-indicator"
        />
      ) : (
        <Carousel
          ref={carouselRef}
          data={articles}
          renderItem={({ item, index }: { item: Article; index: number }) =>
            renderItem(item, index)
          }
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 40}
          vertical={false}
          autoplay={true}
        />
      )}
    </View>
  );
};
