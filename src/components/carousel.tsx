import React from "react";
import { Carousel } from "react-responsive-carousel";
function WCarousel({
  children,
  small,
}: {
  children?: Array<React.ReactChild>;
  small?: boolean;
}) {
  return (
    <Carousel
      autoPlay
      swipeable={small}
      emulateTouch
      stopOnHover={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={4000}
      transitionTime={1000}
      infiniteLoop
    >
      {children}
    </Carousel>
  );
}

export default WCarousel;
