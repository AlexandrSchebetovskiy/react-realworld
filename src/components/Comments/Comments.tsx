import React from "react";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import { useAppSelector } from "../../store/hooks";

const Comments = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        {user ? (
          <CommentForm img={user.image} />
        ) : (
          <div>
            <Link to="/login">Sign in</Link>&nbsp;or&nbsp;
            <Link to="/register">sign up</Link>
            &nbsp;to add comments on this article.
          </div>
        )}
        <div className="card">
          <div className="card-block">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                className="comment-author-img"
              />
            </a>
            &nbsp;
            <a href="" className="comment-author">
              Jacob Schmidt
            </a>
            <span className="date-posted">Dec 29th</span>
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                className="comment-author-img"
              />
            </a>
            &nbsp;
            <a href="" className="comment-author">
              Jacob Schmidt
            </a>
            <span className="date-posted">Dec 29th</span>
            <span className="mod-options">
              <i className="ion-edit"></i>
              <i className="ion-trash-a"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
