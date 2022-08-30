import React from "react";
import "./viewer.scss";
import Disney from "../../../images/viewers-disney.png";
import Pixar from "../../../images/viewers-pixar.png";
import Marvel from "../../../images/viewers-marvel.png";
import Starwars from "../../../images/viewers-starwars.png";
import National from "../../../images/viewers-national.png";
import DisneyVideo from "../../../video/1564674844-disney.mp4";
import PixarVideo from "../../../video/1564676714-pixar.mp4";
import MarvelVideo from "../../../video/1564676115-marvel.mp4";
import StarwarsVideo from "../../../video/1608229455-star-wars.mp4";
import NationalVideo from "../../../video/1564676296-national-geographic.mp4";

const Viewer = () => {
  return (
    <div className="viewer">
      <div className="viewer__img">
        <img src={Disney} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyVideo} type="video/mp4" />
        </video>
      </div>
      <div className="viewer__img">
        <img src={Pixar} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={PixarVideo} type="video/mp4" />
        </video>
      </div>
      <div className="viewer__img">
        <img src={Marvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={MarvelVideo} type="video/mp4" />
        </video>
      </div>
      <div className="viewer__img">
        <img src={Starwars} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={StarwarsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="viewer__img">
        <img src={National} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={NationalVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Viewer;
