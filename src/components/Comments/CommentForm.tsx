import React, { FC } from "react";

interface CommentFormProps {
  img: string;
}

const CommentForm: FC<CommentFormProps> = ({ img }) => {
  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          rows={3}
        ></textarea>
      </div>
      <div className="card-footer">
        <img src={img} className="comment-author-img" />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
