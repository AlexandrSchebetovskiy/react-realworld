import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Feed from "../../components/Feed/Feed";
import Tags from "../../components/Tags/Tags";
import FeedToggle from "../../components/FeedToggle";

const GlobalFeed = () => {
  return (
    <div className="home-page">
      <Banner />

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggle />
            <Feed />
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

export default GlobalFeed;
