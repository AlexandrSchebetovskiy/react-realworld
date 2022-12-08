import React, { FC } from "react";
import { Comment as IComment } from "./types";
import { Link } from "react-router-dom";
import Date from "../UI/Date";
import { useAppSelector } from "../../store/hooks";
interface CommentProps {
  data: IComment;
}

export const Comment: FC<CommentProps> = ({ data }) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{data.body}</p>
      </div>
      <div className="card-footer">
        <Link to={"profile" + data.author.username} className="comment-author">
          <img src={data.author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link to={"profile" + data.author.username} className="comment-author">
          {data.author.username}
        </Link>
        <span className="date-posted">
          <Date date={data.createdAt} />
        </span>
        {user?.username === data.author.username && (
          <span className="mod-options">
            <i className="ion-trash-a"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default Comment;
