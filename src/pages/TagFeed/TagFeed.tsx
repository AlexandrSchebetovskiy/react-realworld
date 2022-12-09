import React from "react";
import Banner from "../../components/Banner";
import FeedToggle from "../../components/FeedToggle";
import Feed from "../../components/Feed/Feed";
import Tags from "../../components/Tags/Tags";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { fetchFeed } from "../../components/Feed/feedSlice";

const TagFeed = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  console.log(params);

  React.useEffect(() => {
    // dispatch(fetchFeed({ url: "", params: { tag: params.tag } }));
  }, [params]);
  return (
    <div className="home-page">
      <Banner />

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggle />
            <Feed apiUrl={""} params={{ tag: params.tag as string }} />
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagFeed;
