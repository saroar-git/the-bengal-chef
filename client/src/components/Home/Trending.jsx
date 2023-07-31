import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Trending = () => {
  return (
    <>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1626046055964-0XSQUR0JPZEOX9MEWUPQ/TSO_Roshmalai+%2838%29.jpg?format=1500w"
            alt="Movie"
            effect="blur"
          />
        </div>
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1618436042840-1K4D3WE91MDQNKXINABR/Pohela+Boishakh+2021+%287%29.jpg?format=2500w"
            alt="Movie"
            effect="blur"
          />
        </div>
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1618083512978-R19LYY4I7YO00M4ATDGJ/Chingri+Malai+Curry+%2849%29.jpg?format=1500w"
            alt="Movie"
            effect="blur"
          />
        </div>
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1598253523077-71MFDDNMH0O6VJWW3C0Y/Nam+Tok+%2814%29.jpg?format=2500w"
            alt="Movie"
            effect="blur"
          />
        </div>
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1593445741140-6XQG3TEZI14RGIFHZWM7/Jhal+Muri+%284%29.jpg?format=1500w"
            alt="Movie"
            effect="blur"
          />
        </div>
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1592258969111-W6MOB229A8I5HX70EX95/Tehari+%281%29.jpg?format=1500w"
            alt="Movie"
            effect="blur"
          />
        </div>
        <div className="carousel-item">
          <LazyLoadImage
            className="w-72 md:mr-2"
            src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1593217033662-Q5GV53QO7MNAPSORUV37/Fuchka+%283%29.jpg?format=1500w"
            alt="Movie"
            effect="blur"
          />
        </div>
      </div>
    </>
  );
};

export default Trending;
