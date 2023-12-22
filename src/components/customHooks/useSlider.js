import { useState } from "react";

export const useSlider = () => {
  const [slide, setSlide] = useState(0);
  const [items, setItems] = useState(null);
  const [touchPosition, setTouchPosition] = useState(null);
  const goToPrevSlide = () => {
    if (slide === 0) {
      setSlide(items.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const goToNextSlide = () => {
    if (slide === items.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    if (direction > 10 && slide < items.length - 1) {
      setSlide(slide + 1);
    } else if (direction > 10 && slide === items.length - 1) {
      setSlide(0);
    }
    if (direction < -10 && slide < items.length - 1) {
      setSlide(items.length - 1);
    } else if (direction < -10) {
      setSlide(0);
    }
    setTouchPosition(null);
  };

  return [
    goToPrevSlide,
    goToNextSlide,
    handleTouchStart,
    handleTouchMove,
    slide,
    setItems,
    items,
  ];
};
