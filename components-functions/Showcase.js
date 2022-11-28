import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState, useCallback } from "react";
import useGlobalState, { carouselData } from "../utils/globalState";

export default function Showcase({ id = "example" }) {
  const [carousel, setCarousel] = useState();
  const [data, setData] = useGlobalState(carouselData);

  const carouselRef = useCallback((div) => {
    // Load Bootstrap Carousel via useCallback() https://youtu.be/iRaelG7v0OU?t=580
    if (carousel || !div) return;
    (async () => {
      const { Carousel } = await import("bootstrap/dist/js/bootstrap");
      setCarousel(new Carousel(`#${id}`));
    })();

    return carousel;
  }, []);

  useEffect(() => {
    if (carousel)
      // Extend the existing global state with the slideto function once carousel is loaded.
      setData({
        ...data, // slides: ["First", "Second", "Third"],
        slideto: (slideNumber) => carousel.to(slideNumber - 1),
      });
  }, [carousel]);

  return (
    <div ref={carouselRef} id={id} className={"carousel slide"}>
      <div className="carousel-inner">
        {data.slides.map((slide, index) => (
          <div
            className={"carousel-item" + (index === 0 ? " active" : "")}
            key={slide + index}
          >
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
              width="800"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Placeholder: ${slide} slide`}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#555" dy=".3em">
                {slide} slide
              </text>
            </svg>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
