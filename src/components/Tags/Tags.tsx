import React from "react";
import { useGetAllTagsQuery } from "./TagsApi";
import Loader from "../UI/Loader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTags } from "./Tags.Slice";

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
            <a key={idx + tag} href="" className="tag-pill tag-default">
              {tag}
            </a>
          ))
        )}
      </div>
    </>
  );
};

export default Tags;
