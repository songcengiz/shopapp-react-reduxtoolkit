import React from "react";
import Slider from "react-slick";

const SliderContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {" "}
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 p-6">
          <div>
            <div className="text-5xl">Your Book Address</div>
            <div className="text-lg my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center bg-gray-200">
              Detail
            </div>
          </div>
          <img src="" alt="Book" />
        </div>
        <div className="!flex items-center bg-gray-100 p-6">
          <div>
            <div className="text-5xl">Your BookShop</div>
            <div className="text-lg my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center bg-gray-200">
              Detail
            </div>
          </div>
          <img src="" alt="Book" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderContainer;
