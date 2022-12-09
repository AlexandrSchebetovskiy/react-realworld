import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFeed } from "./feedSlice";
import Loader from "../UI/Loader";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

interface FeedProps {
  apiUrl?: string;
  params?: { [key: string]: string };
}

const Feed: FC<FeedProps> = ({ apiUrl = "", params = {} }): any => {
  const dispatch = useAppDispatch();
  const feed = useAppSelector((state) => state.feed);
  useEffect(() => {
    const url = "articles/" + apiUrl;
    dispatch(fetchFeed({ url, params }));
  }, []);

  if (feed.isLoading) return <Loader />;
  return feed.articles?.map((article) => (
    <ArticlePreview key={article.slug} article={article} />
  ));
};

export default Feed;
