import React from "react";
import "./originals.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../../../features/movie/movieSlice";

const Originals = () => {
  const original = useSelector(selectOriginal);

  return (
    <div className="originals">
      <h1>Originals</h1>
      <div className="originals__content">
        {original &&
          original.map((movie, key) => (
            <div key={key} className="originals__content-link">
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

export default Originals;
