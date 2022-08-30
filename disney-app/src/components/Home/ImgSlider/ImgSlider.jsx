import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imgSlider.scss";
import Badging from "../../../images/slider-badging.jpg";
import Scale from "../../../images/slider-scale.jpg";
import Badag from "../../../images/slider-badag.jpg";
import Scales from "../../../images/slider-scales.jpg";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1, //hiện môtj slide
    slidesToScroll: 1, // scroll 1 ảnh
    autoplay: true,
  };

  return (
    <div className="imgSlider">
      <Slider className="slider" {...settings}>
        <div className="slider__img">
          <a>
            <img src={Badging} alt="" />
          </a>
        </div>
        <div className="slider__img">
          <a>
            <img src={Scale} alt="" />
          </a>
        </div>
        <div className="slider__img">
          <a>
            <img src={Badag} alt="" />
          </a>
        </div>
        <div className="slider__img">
          <a>
            <img src={Scales} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;
