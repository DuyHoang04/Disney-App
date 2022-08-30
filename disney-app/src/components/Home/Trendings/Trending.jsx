import React from "react";
import "./trending.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../../../features/movie/movieSlice";

const Trending = () => {
  const trending = useSelector(selectTrending);

  return (
    <div className="trendings">
      <h1>Trending +</h1>
      <div className="trendings__content">
        {trending &&
          trending.map((movie, key) => (
            <div key={key} className="trendings__content-link">
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

export default Trending;
