import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    speed: 7000, // Adjust for smoothness
    cssEase: "linear",
    pauseOnHover: true,
  };

  const cards = [
    { id: 1, content: <div style={{ WebkitTextStroke:"3px red "}} className="text-gray-900">REQUIREMENTS</div> },
    { id: 2, content: <div className="">DESIGN</div> },
    { id: 3, content: <div style={{ WebkitTextStroke: "3px red "}} className="text-gray-900">IMPLEMENT</div> },
    { id: 4, content: <div>TESTING</div> },
    { id: 5, content: <div style={{ WebkitTextStroke: "3px red"}} className="text-gray-900">DEPLOYMENT</div> },
    { id: 6, content: <div>MAINTENANCE</div> },
  ];

  return (
    <div className="w-full h-full relative bg-[#011415] overflow-x-clip">
      <div className="bg-[#354171]">
        <Slider {...settings}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex justify-center items-center lg:space-x-14 mt-5 lg:mt-10 xl:mt-14 mb-4 gap-3"
            >
              <div className="w-3.5 h-3.5 -ml-5 -mb-5 lg:w-[30px] lg:h-[30px] lg:-mb-12 lg:ml-3 xl:w-[35px] xl:h-[35px] xl:-mb-[4.4rem] rounded-full bg-red-500"></div>
              <div className="font-Roboto text-lg lg:text-[3rem] xl:text-[4.5rem] font-bold leading-normal text-gray-300">
                {card.content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
