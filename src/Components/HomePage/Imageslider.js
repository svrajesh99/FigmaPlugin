import React, { useEffect, useState } from "react";
import "./Imageslider.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Imageslider = (props) => {
  const [currentindex, setCurrentindex] = useState(0);
  const [currentindex1, setCurrentindex1] = useState(0);
  const length = props.slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentindex((prevIndex) => (prevIndex + 1) % (length / 2));
      setCurrentindex1((prevIndex1) => (prevIndex1 + 1) % length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [length]);

  const leftslider = () => {
    setCurrentindex((prevIndex) => (prevIndex === 0 ? length / 2 - 1 : prevIndex - 1));
  };

  const rightslider = () => {
    setCurrentindex((prevIndex) => (prevIndex === length / 2 - 1 ? 0 : prevIndex + 1));
  };

  const leftslider2 = () => {
    setCurrentindex1((prevIndex1) => (prevIndex1 === 0 ? length - 1 : prevIndex1 - 1));
  };

  const rightslider2 = () => {
    setCurrentindex1((prevIndex1) => (prevIndex1 === length - 1 ? 0 : prevIndex1 + 1));
  };

  return (
    <>
      <div className="double-slider">
        <div className="image-slider">
          <div
            className="slider"
            style={{
              backgroundImage: `url(${props.slides[currentindex].url})`,
            }}
          >
            <div id="left">
              <AiOutlineLeft onClick={leftslider} />
            </div>
          </div>
          <div
            className="slider-1"
            style={{
              backgroundImage: `url(${props.slides[currentindex + 1].url})`,
            }}
          ></div>
          <div
            className="slider-1"
            style={{
              backgroundImage: `url(${props.slides[currentindex + 2].url})`,
            }}
          ></div>
          <div
            className="slider-1"
            style={{
              backgroundImage: `url(${props.slides[currentindex + 3].url})`,
            }}
          >
            <div id="right">
              <AiOutlineRight onClick={rightslider} />
            </div>
          </div>
        </div>
      </div>
      <div className="image-slider-single">
        <div
          className="single-slider"
          style={{ backgroundImage: `url(${props.slides[currentindex1].url})` }}
        >
          <div id="left">
            <AiOutlineLeft onClick={leftslider2} />
          </div>
          <div id="right">
            <AiOutlineRight onClick={rightslider2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Imageslider;
