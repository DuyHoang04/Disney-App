import React from "react";
import "./recomments.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../../features/movie/movieSlice";

const Recomments = () => {
  const recommend = useSelector(selectRecommend);

  return (
    <div className="recomments">
      <h1>Recomments</h1>
      <div className="recomments__content">
        {recommend &&
          recommend.map((movie, key) => (
            <div key={key} className="recomments__content-link">
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recomments;
