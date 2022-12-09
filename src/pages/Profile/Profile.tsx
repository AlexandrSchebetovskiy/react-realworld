import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProfile } from "./profileSlice";
import Loader from "../../components/UI/Loader";
import Feed from "../../components/Feed/Feed";
import { fetchFeed } from "../../components/Feed/feedSlice";

const Profile = () => {
  const params = useParams();

  const dispatch = useAppDispatch();
  const { profile, error, isLoading } = useAppSelector(
    (state) => state.profile
  );
  const { user } = useAppSelector((state) => state.auth);
  const [favorited, setFavorited] = React.useState(false);

  React.useEffect(() => {
    dispatch(getProfile(params.slug as string));
  }, [params]);

  React.useEffect(() => {
    dispatch(
      fetchFeed({
        url: "articles",
        params: { [favorited ? "favorited" : "author"]: params.slug as string },
      })
    );
  }, [favorited]);

  if (isLoading) return <Loader />;
  return (
    <>
      {profile && (
        <div className="profile-page">
          <div className="user-info">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 offset-md-1">
                  <img src={profile.image} className="user-img" />
                  <h4>{profile.username}</h4>
                  <p>{profile?.bio}</p>

                  {user?.username === profile.username ? (
                    <Link
                      className="btn btn-sm btn-outline-secondary action-btn"
                      to="/settings"
                    >
                      <i className="ion-gear-a"></i> Edit Profile Settings{" "}
                    </Link>
                  ) : (
                    <button className="btn btn-sm btn-outline-secondary action-btn">
                      <i className="ion-plus-round"></i>
                      &nbsp; Follow {profile.username}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <div className="articles-toggle">
                  <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${favorited ? "" : "active"}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setFavorited(false)}
                      >
                        My Articles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${favorited ? "active" : ""}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setFavorited(true)}
                      >
                        Favorited Articles
                      </a>
                    </li>
                  </ul>
                </div>

                <Feed
                  params={{
                    [favorited ? "favorited" : "author"]: params.slug as string,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
