import React from "react";
import { useGetAllTagsQuery } from "./TagsApi";
import Loader from "../UI/Loader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTags } from "./Tags.Slice";
import { Link } from "react-router-dom";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags, isLoading, error } = useAppSelector((state) => state.tags);
  React.useEffect(() => {
    dispatch(fetchTags());
  }, []);

  if (error) return <h4>{error}</h4>;
  return (
    <>
      <p>Popular Tags</p>
      <div className="tag-list">
        {isLoading ? (
          <Loader />
        ) : (
          tags?.map((tag, idx) => (
            <Link
              key={idx + tag}
              to={"/feed/" + tag}
              className="tag-pill tag-default"
            >
              {tag}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Tags;
