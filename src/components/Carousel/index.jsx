import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Header } from "../Header";
import "./index.scss";

export const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="carousel" id="home">
      <Header />
      <BsChevronLeft className="left-arrow" onClick={prevSlide} />
      <BsChevronRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="carousel-image"
                />
                <div className="main_text">
                  <p>
                    {slide.title} <strong>{slide.subtitle}</strong>
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};
