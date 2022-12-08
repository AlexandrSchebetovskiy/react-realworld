import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const FeedToggle = () => {
  const params = useParams();

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink end className="nav-link" to="/feed">
            Your Feed
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink end className="nav-link" to="/">
            Global Feed
          </NavLink>
        </li>
        {params.tag && (
          <li className="nav-item">
            <NavLink className="nav-link" to={"/feed/" + params.tag}>
              #{params.tag}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggle;
