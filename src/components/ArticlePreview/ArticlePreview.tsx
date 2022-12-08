import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Article } from "../Feed/types";
import ArticleMeta from "../ArticleMeta";
interface ArticleProps {
  article: Article;
}
const ArticlePreview: FC<ArticleProps> = ({ article }) => {
  return (
    <div className="article-preview">
      <ArticleMeta author={article.author} date={article.createdAt} />
      <Link to={`articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};

export default ArticlePreview;
