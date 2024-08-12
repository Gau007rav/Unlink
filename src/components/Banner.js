import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";
const data = [
  "https://i.pinimg.com/originals/55/4a/ea/554aeafdde97dab31caf244ba3b4312c.jpg?q=50",
  " https://4kwallpapers.com/images/wallpapers/interstellar-3840x2160-10148.jpg?q=50",
  "https://e0.pxfuel.com/wallpapers/670/602/desktop-wallpaper-interstellar-quotes-quotesgram.jpg?q=50",
  "https://e0.pxfuel.com/wallpapers/399/92/desktop-wallpaper-quotes-about-interstellar-55-quotes.jpg?q=50",
];
const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((imag, i) => {
        return (
          <>
            <img src={imag} alt="img" key={i} className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
};

export default Banner;
