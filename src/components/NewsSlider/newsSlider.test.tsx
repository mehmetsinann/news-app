import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NewsSlider } from "./index";
import { mockArticles as articles } from "../../mocks/articles";

describe("NewsSlider", () => {
  it("renders correctly", () => {
    const onPressItem = jest.fn();

    const { getByTestId } = render(
      <NewsSlider articles={articles} onPressItem={onPressItem} />
    );

    const carouselData = getByTestId("news-slider").props.children.props.data;

    articles.forEach((article, index) => {
      const newCard = getByTestId(`new-card-${index}`);
      fireEvent.press(newCard);
      expect(article.title).toBe(carouselData[index].title);
      expect(article.description).toBe(carouselData[index].description);
      expect(article.url).toBe(carouselData[index].url);
      expect(article.urlToImage).toBe(carouselData[index].urlToImage);
      expect(article.publishedAt).toBe(carouselData[index].publishedAt);
      expect(article.content).toBe(carouselData[index].content);
      expect(article.author).toBe(carouselData[index].author);
      expect(article.source.id).toBe(carouselData[index].source.id);
      expect(article.source.name).toBe(carouselData[index].source.name);
    });

    expect(onPressItem).toBeCalledTimes(articles.length);
    expect(carouselData.length).toBe(articles.length);
    expect(getByTestId("news-slider")).toBeTruthy();
  });
});
