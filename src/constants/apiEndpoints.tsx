export const newsEndpoint: string = `https://newsapi.org/v2/everything?q=us&sortBy=popularity&language=en&apiKey=${process.env.API_KEY}&pageSize=10`;

export const headlineNewsEndpoint: string = `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=10&apiKey=${process.env.API_KEY}`;