export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface FeedResponse {
  articles: Article[];
  articlesCount: number;
}
