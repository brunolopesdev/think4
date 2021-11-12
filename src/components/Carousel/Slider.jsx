import React, { useContext } from "react";
import { Carousel } from ".";
import DataContext from "../../context/DataContext";

export const Slider = () => {
  const { data } = useContext(DataContext);

  let carouselData = data.homeBanner;

  return <Carousel slides={carouselData} />;
};
