import React from "react";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchComments } from "./commentsSlice";
import Loader from "../UI/Loader";

const Comments = ({ slug }: { slug: string }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { comments, isLoading, error } = useAppSelector(
    (state) => state.comments
  );

  React.useEffect(() => {
    dispatch(fetchComments(slug));
  }, []);
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

        {isLoading ? (
          <Loader />
        ) : (
          comments?.map((comment) => <Comment data={comment} />)
        )}
      </div>
    </div>
  );
};

export default Comments;
