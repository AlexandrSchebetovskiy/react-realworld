import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Article } from "../Feed/types";
import ArticleMeta from "../ArticleMeta";
import Date from "../UI/Date";
interface ArticleProps {
  article: Article;
}
const ArticlePreview: FC<ArticleProps> = ({ article }) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={"/profile/" + article.author.username}>
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <Link className="author" to={"/profile/" + article.author.username}>
            {article.author.username}
          </Link>
          <span className="date">
            <Date date={article.createdAt} />
          </span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
      </div>
      <Link to={`/articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};

export default ArticlePreview;
