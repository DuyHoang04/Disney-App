import React from "react";
import "./newDisney.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../../features/movie/movieSlice";

const NewDisney = () => {
  const newDisney = useSelector(selectNewDisney);

  return (
    <div className="newDisney">
      <h1>New Disney +</h1>
      <div className="newDisney__content">
        {newDisney &&
          newDisney.map((movie, key) => (
            <div key={key} className="newDisney__content-link">
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

export default NewDisney;
