import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import moment from "moment";
import { NewCard } from "./index";
import { mockArticles as articles } from "../../mocks/articles";

const article: Article = articles[0];

describe("NewCard", () => {
  it("renders correctly", () => {
    const onPress = jest.fn();

    const publishDate = moment(article.publishedAt).format(
      "DD MMMM YYYY - HH:mm"
    );

    const { getByText, getByTestId } = render(
      <NewCard article={article} onPress={onPress} />
    );

    expect(getByText(publishDate)).toBeTruthy();
    expect(getByText(article.source.name)).toBeTruthy();
    expect(getByText(article.title)).toBeTruthy();
    expect(getByText(article.description)).toBeTruthy();
    expect(getByTestId("new-card")).toBeTruthy();

    fireEvent.press(getByTestId("new-card"));
    expect(onPress).toHaveBeenCalled();
  });
});
