import mainImg from "../images/poster.jpg";
import secondImg from "../images/moviePoster.jpg";
import thirdImg from "../images/mainImg.jpeg";
import { useEffect } from "react";
import { Carousel } from "flowbite";

const PopularCarousel = () => {
  useEffect(() => {
    // Initialize the carousel after the component is mounted
    const defaultCarousel = document.getElementById("default-carousel");
    const carousel = new Carousel(defaultCarousel);
    carousel.init();
  }, []);
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full z-0"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-[500px]">
          {/* Item 1 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src={mainImg}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src={secondImg}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src={thirdImg}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src={mainImg}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src={secondImg}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCarousel;
