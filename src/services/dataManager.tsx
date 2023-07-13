import axios from "axios";
import { headlineNewsEndpoint, newsEndpoint } from "../constants/apiEndpoints";

export const getNews: (
  page: string,
  q?: string,
  sortBy?: string
) => Promise<Article[]> = async (
  page,
  q = "general",
  sortBy = "publishedAt"
) => {
  const news: Article[] = [];
  const params = `&page=${page}&pageSize=10&q=${q}&sortBy=${sortBy}&language=en`;
  try {
    await axios.get(`${newsEndpoint}${params}`).then((response) => {
      news.push(...response.data.articles);
    });
  } catch (error) {
    console.log(error);
  }
  return news;
};

export const getHeadlineNews: (country?: string) => Promise<Article[]> = async (
  country = "us"
) => {
  const news: Article[] = [];
  const params = `&pageSize=10&country=${country}&category=general`;
  try {
    await axios.get(`${headlineNewsEndpoint}${params}`).then((response) => {
      news.push(...response.data.articles);
    });
  } catch (error) {
    console.log(error);
  }
  return news;
};
