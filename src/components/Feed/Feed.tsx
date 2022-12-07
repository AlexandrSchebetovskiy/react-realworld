import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFeed } from "./feedSlice";
import { Link } from "react-router-dom";

interface Props {
  apiUrl: string;
}

const Feed: any = ({ apiUrl = "articles" }) => {
  const dispatch = useAppDispatch();
  const feed = useAppSelector((state) => state.feed);
  useEffect(() => {
    dispatch(fetchFeed(apiUrl));
  }, []);
  return feed.articles?.map((article) => (
    <div key={article.slug} className="article-preview">
      <div className="article-meta">
        <Link to={`profile/${article.author.username}`}>
          <img src={article.author.image} />
        </Link>
        <div className="info">
          <Link to={`profile/${article.author.username}`} className="author">
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link to={`articles/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  ));
};

export default Feed;
