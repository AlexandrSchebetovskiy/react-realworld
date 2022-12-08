import React, { FC } from "react";

interface ArticleTagsProps {
  tags: string[];
}

const ArticleTags: FC<ArticleTagsProps> = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag) => (
        <li key={tag} className="tag-default tag-pill tag-outline">
          {tag}&nbsp;
        </li>
      ))}
    </ul>
  );
};

export default ArticleTags;
