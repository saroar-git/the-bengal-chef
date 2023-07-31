import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarWeek, FaConciergeBell, FaThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefCards = ({ chef }) => {
  const { id, name, image, experience, recipes, likes } = chef;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        {/* using lazy load in image */}
        <LazyLoadImage
          className="md:h-full md:w-52"
          src={image}
          alt="Album"
          effect="blur"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title mb-4 md:text-2xl">{name}</h2>

        <div className="font-semibold flex items-center gap-2">
          <FaCalendarWeek /> <p>Years of experience: {experience}</p>
        </div>

        <div className="font-semibold flex items-center gap-2">
          <FaConciergeBell /> <p>Number of recipes: {recipes}</p>
        </div>

        <div className="font-semibold flex items-center gap-2">
          <FaThumbsUp /> <p>Likes: {likes}</p>
        </div>

        <div className="card-actions mt-12">
          <Link
            to={`/recipes/${id}`}
            className="btn border-none bg-[#C19D60] text-white hover:bg-[#d1952c] normal-case"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCards;
