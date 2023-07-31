import React, { useState } from "react";
import {
  FaCalendarWeek,
  FaConciergeBell,
  FaRegStar,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = () => {
  const recipes = useLoaderData();

  // favorite button disable useState
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [button3Disabled, setButton3Disabled] = useState(false);

  const {
    name,
    image,
    experience,
    total_recipes,
    likes,
    rating1,
    rating2,
    rating3,
    method1,
    method2,
    method3,
    ingredients1,
    ingredients2,
    ingredients3,
    recipe_name1,
    recipe_name2,
    recipe_name3,
    description,
  } = recipes;

  // toast for favorite and disable buttons
  const handleButtonClick = (buttonId) => {
    toast.success("Recipe added to favorite!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // favorite button click and disable
    if (buttonId === "button1") {
      setButton1Disabled(true);
    } else if (buttonId === "button2") {
      setButton2Disabled(true);
    } else if (buttonId === "button3") {
      setButton3Disabled(true);
    }
  };

  return (
    <div className="py-12 md:mx-24">
      <h1 className="md:text-5xl text-xl md:mb-0 text-center md:font-lobster text-[#04D301]">
        Chef Recipes
      </h1>
      <hr className="md:w-1/2 w-11/12 mx-auto border border-[#04D301] mt-2 md:mb-20 mb-5" />
      <ToastContainer />

      <div className="card mb-0 w-11/12 mx-auto md:mb-10 md:card-side">
        <figure>
          <img className="w-60" src={image} alt="chef" />
        </figure>

        <div className="card-body w-4/5">
          <div>
            <h2 className="card-title mb-4 md:text-5xl font-lobster">{name}</h2>
            <hr className="md:w-1/2 hidden md:block border-2 border-[#C19D60]" />
          </div>
          <div className="md:mt-6 text-justify">
            <p className="font-bold">
              Chef Bio:{" "}
              <small className="font-normal text-base">{description}</small>
            </p>
          </div>
          <div className="font-semibold mt-4 flex items-center gap-2">
            <FaCalendarWeek /> <p>Years of experience: {experience}</p>
          </div>
          <div className="font-semibold flex items-center gap-2">
            <FaConciergeBell /> <p>Number of recipes: {total_recipes}</p>
          </div>
          <div className="font-semibold flex items-center gap-2">
            <FaThumbsUp /> <p>Likes: {likes}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card w-full glass">
          <div className="card-body space-y-5">
            <h2 className="card-title md:text-2xl md:font-lobster text-[#04d301]">
              {recipe_name1}
            </h2>

            <h3 className="font-bold md:my-0">
              Ingredients:{" "}
              <small className="md:text-base font-normal">
                <ul
                  className="space-y-[4px] mt-2 pl-2 md:ml-6"
                  style={{ listStyleType: "disc" }}
                >
                  {ingredients1.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </small>
            </h3>

            <div>
              <h4 className="font-bold">Method of cooking: </h4>
              <p className="md:text-base font-normal mb-3 mt-1 text-justify md:ml-4">
                {method1}
              </p>
            </div>

            <p className="font-bold">
              Ratings:{" "}
              <Rating
                className="text-orange-500"
                readonly
                placeholderRating={rating1}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
            </p>

            <button
              id="button1"
              disabled={button1Disabled}
              onClick={() => handleButtonClick("button1")}
              className="btn normal-case bg-[#C19D60] text-white border-none hover:bg-[#d1952c] "
            >
              Add Favorite <FaRegStar className="ml-2" />
            </button>
          </div>
        </div>

        <div className="card w-full glass">
          <div className="card-body space-y-5">
            <h2 className="card-title md:text-2xl md:font-lobster text-[#04d301]">
              {recipe_name2}
            </h2>

            <h3 className="font-bold md:my-0">
              Ingredients:{" "}
              <small className="md:text-base font-normal">
                <ul
                  className="space-y-[4px] mt-2 pl-2 md:ml-6"
                  style={{ listStyleType: "disc" }}
                >
                  {ingredients2.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </small>
            </h3>

            <div>
              <h4 className="font-bold">Method of cooking: </h4>
              <p className="md:text-base font-normal mb-3 mt-1 text-justify md:ml-4">
                {method2}
              </p>
            </div>

            <p className="font-bold">
              Ratings:{" "}
              <Rating
                className="text-orange-500"
                readonly
                placeholderRating={rating2}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
            </p>

            <button
              id="button2"
              disabled={button2Disabled}
              onClick={() => handleButtonClick("button2")}
              className="btn normal-case bg-[#C19D60] text-white border-none hover:bg-[#d1952c] "
            >
              Add Favorite <FaRegStar className="ml-2" />
            </button>
          </div>
        </div>

        <div className="card w-full glass">
          <div className="card-body space-y-5">
            <h2 className="card-title md:text-2xl md:font-lobster text-[#04d301]">
              {recipe_name3}
            </h2>

            <h3 className="font-bold md:my-0">
              Ingredients:{" "}
              <small className="md:text-base font-normal">
                <ul
                  className="space-y-[4px] mt-2 pl-2 md:ml-6"
                  style={{ listStyleType: "disc" }}
                >
                  {ingredients3.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </small>
            </h3>

            <div>
              <h4 className="font-bold">Method of cooking: </h4>
              <p className="md:text-base font-normal mb-3 mt-1 text-justify md:ml-4">
                {method3}
              </p>
            </div>

            <p className="font-bold">
              Ratings:{" "}
              <Rating
                className="text-orange-500"
                readonly
                placeholderRating={rating3}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />
            </p>

            <button
              id="button3"
              disabled={button3Disabled}
              onClick={() => handleButtonClick("button3")}
              className="btn normal-case bg-[#C19D60] text-white border-none hover:bg-[#d1952c] "
            >
              Add Favorite <FaRegStar className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
