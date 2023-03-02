import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const Slider = () => {
  const sliderImg = [
    './img/banner1.svg',

    './img/banner3.svg',
    './img/banner4.svg',
    './img/banner5.svg',
  ];
  const slStyle = {
    borderRadius: 21,
    backgroundColor: '#94bbe9',
  };

  return (
    <div className="mainBlock">
      <SimpleImageSlider
        width={1140}
        height={430}
        images={sliderImg}
        showBullets={true}
        showNavs={true}
        style={slStyle}
        navStyle={2}
        autoPlay={false}
        autoPlayDelay={3.5}
        slideDuration={1.1}></SimpleImageSlider>
      {/* <img className="photo" src="./img/banner3.svg" alt="sliderImage" />

      <button className="leftButton">
        <img src="./img/arrow.svg" alt="arrow" />
      </button>
      <button className="rightButton">
        <img src="./img/arrow.svg" alt="arrow" />
      </button> */}
    </div>
  );
};

export default Slider;
