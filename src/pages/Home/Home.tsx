import React from "react";
import Banner from "../../components/Banner";
import Tags from "../../components/Tags/Tags";
import { Outlet } from "react-router-dom";
import Feed from "../../components/Feed/Feed";

const Home = () => {
  return (
    <div className="home-page">
      <Outlet />
      <Banner />

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            <Feed apiUrl={"articles"} />
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

export default Home;
