import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFeed } from "./feedSlice";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

interface Props {
  apiUrl: string;
}

const Feed: any = ({ apiUrl = "articles" }) => {
  const dispatch = useAppDispatch();
  const feed = useAppSelector((state) => state.feed);
  useEffect(() => {
    dispatch(fetchFeed(apiUrl));
  }, []);

  if (feed.isLoading) return <Loader />;
  return feed.articles?.map((article) => (
    <ArticlePreview key={article.slug} article={article} />
  ));
};

export default Feed;
