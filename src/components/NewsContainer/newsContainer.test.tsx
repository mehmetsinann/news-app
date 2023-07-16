import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NewsContainer } from "./index";
import { mockArticles as articles } from "../../mocks/articles";

describe("NewsContainer", () => {
  it("renders correctly", () => {
    const onPressItem = jest.fn();
    const getAllNews = jest.fn();

    const { getByText, getByTestId, queryByTestId } = render(
      <NewsContainer
        articles={articles}
        onPressItem={onPressItem}
        loading={false}
        getAllNews={getAllNews}
      />
    );

    articles.forEach((article) => {
      expect(getByText(article.title)).toBeTruthy();
      expect(getByText(article.description)).toBeTruthy();
      expect(getByText(article.source.name)).toBeTruthy();
    });

    const loadMoreButton = getByTestId("load-more-button");
    expect(loadMoreButton).toBeTruthy();

    fireEvent.press(loadMoreButton);
    expect(getAllNews).toHaveBeenCalled();

    expect(queryByTestId("loading-indicator")).toBeNull();
  });

  it("renders loading indicator when loading prop is true", () => {
    const onPressItem = jest.fn();
    const getAllNews = jest.fn();

    const { getByTestId } = render(
      <NewsContainer
        articles={articles}
        onPressItem={onPressItem}
        loading={true}
        getAllNews={getAllNews}
      />
    );

    const loadingIndicator = getByTestId("loading-indicator");
    expect(loadingIndicator).toBeTruthy();
  });
});
