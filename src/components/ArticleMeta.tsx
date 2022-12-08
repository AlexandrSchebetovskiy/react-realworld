import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "./Feed/types";

interface ArticleMetaProps {
  author: Author;
  date: Date;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({ author, date }) => {
  return (
    <div className="article-meta">
      <Link to={"/profile/" + author.username}>
        <img src={author.image} />
      </Link>
      <div className="info">
        <Link to={"/profile/" + author.username} className="author">
          {author.username}
        </Link>
        <span className="date">{new Date(date).toDateString()}</span>
      </div>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; {author.username} <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; Favorite Post <span className="counter">(29)</span>
      </button>
    </div>
  );
};

export default ArticleMeta;
