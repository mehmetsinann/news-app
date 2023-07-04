// News API Key: 44153d692eda497496f8eb010a2de0a6

import axios from "axios";
import { headlineNewsEndpoint, newsEndpoint } from "../constants/apiEndpoints";

export const getNews: () => Promise<Article[]> = async () => {
  const news: Article[] = [];
  try {
    await axios.get(`${newsEndpoint}`).then((response) => {
      news.push(...response.data.articles);
    })
  } catch (error) {
    console.log(error)
  }
  return news;
};

export const getHeadlineNews: () => Promise<Article[]> = async () => {
  const news: Article[] = [];
  try {
    await axios.get(`${headlineNewsEndpoint}`).then((response) => {
      news.push(...response.data.articles);
    })
  } catch (error) {
    console.log(error)
  }
  return news;
};