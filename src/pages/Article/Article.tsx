import React from "react";
import ArticleBanner from "../../components/ArticleBanner";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { getCurrentArticle } from "./articleSlice";
import Loader from "../../components/UI/Loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ArticleMeta from "../../components/ArticleMeta";
import Comments from "../../components/Comments/Comments";
import ArticleTags from "../../components/ArticleTags";

export const Article = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { isLoading, error, article } = useAppSelector(
    (state) => state.article
  );
  React.useEffect(() => {
    dispatch(getCurrentArticle(params.slug as string));
  }, [params.slug]);

  if (isLoading)
    return (
      <div className="container ">
        <Loader />
      </div>
    );

  return (
    <>
      {article && (
        <div className="article-page">
          <ArticleBanner
            author={article.author}
            title={article.title}
            description={article.description}
            date={article.createdAt}
          />
          <div className="container page">
            <div className="row article-content">
              <div className="col-md-12">
                <ReactMarkdown
                  skipHtml={false}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {article.body}
                </ReactMarkdown>

                <ArticleTags tags={article.tagList} />
              </div>
            </div>

            <hr />

            <div className="article-actions">
              <ArticleMeta author={article.author} date={article.createdAt} />
            </div>

            <Comments slug={article.slug} />
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
