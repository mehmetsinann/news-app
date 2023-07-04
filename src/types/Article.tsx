interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  author: string;
  source: {
    id: string;
    name: string;
  };
}