import React from "react";
import Slider from "react-slick";
import { RxCross2 } from "react-icons/rx";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Testing({ id }) {
  let images;
  console.log(id);
  switch (id) {
    case 1:
      images = import.meta.glob("../assets/1/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 2:
      images = import.meta.glob("../assets/2/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 3:
      images = import.meta.glob("../assets/3/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 4:
      images = import.meta.glob("../assets/4/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 5:
      images = import.meta.glob("../assets/5/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 6:
      images = import.meta.glob("../assets/6/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 7:
      images = import.meta.glob("../assets/7/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
    case 8:
      images = import.meta.glob("../assets/8/*.{png,jpg,jpeg,svg}", {
        eager: true,
      });
      break;
  }

  console.log(images);

  const slider = React.useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="flex flex-row w-full bg-gray-100 py-[100px] justify-center items-center ">
      <Slider
        ref={slider}
        {...settings}
        className="flex w-[400px] justify-center items-center "
      >
        {Object.values(images).map((image, index) => (
          <img
            key={index}
            src={image.default}
            alt={`Image ${index + 1}`}
            className=""
          />
        ))}
      </Slider>
    </div>
  );
}
