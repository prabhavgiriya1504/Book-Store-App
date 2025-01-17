import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../src/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className="font-semibold text-xl py-7">Free Offered Courses</h1>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          architecto rem iusto vel maiores, esse facilis suscipit quos facere
          quas laborum fugit reprehenderit nobis adipisci{" "}
        </p>
      </div>
      <div>
      <Slider {...settings}>
        {filterData.map((item) =>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook ;
