import React, { FC } from "react";
import { Author } from "./Feed/types";
import { Link } from "react-router-dom";
import ArticleMeta from "./ArticleMeta";

interface ArticleBannerProps {
  author: Author;
  title: string;
  description: string;
  date: Date;
}

const ArticleBanner: FC<ArticleBannerProps> = ({
  author,
  title,
  description,
  date,
}) => {
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>
        <p style={{ opacity: "0.7" }}>{description}</p>

        <ArticleMeta author={author} date={date} />
      </div>
    </div>
  );
};

export default ArticleBanner;
