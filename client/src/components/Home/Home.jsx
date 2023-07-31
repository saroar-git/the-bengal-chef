import React, { useEffect, useState } from "react";
import bg from "../../assets/images/recipes.JPG";
import food from "../../assets/images/food.PNG";
import {
  FaEnvira,
  FaRegLemon,
  FaClock,
  FaConciergeBell,
  FaLeanpub,
  FaUserFriends,
  FaRegCheckCircle,
  FaSeedling,
} from "react-icons/fa";
import ChefCards from "./ChefCards";
import Reviews from "./Reviews";
import Trending from "./Trending";

const Home = () => {
  //fetch chef sections data using useState and useEffect
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const chefData = async () => {
      try {
        const response = await fetch(
          "https://the-bengal-chef-server-saroar-git.vercel.app/chefs"
        );
        const jsonData = await response.json();
        setChefs(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    chefData();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-tl from-slate-800 to-slate-800 h-[250px] md:h-screen w-full relative">
        {/* banner background image */}
        <img
          className="w-full md:h-full object-contain md:object-cover absolute mix-blend-overlay"
          src={bg}
          alt=""
        />

        {/* banner title and descriptions */}
        <div className="md:pl-20 py-4 md:pt-0 h-full px-6 absolute w-full mx-auto ">
          <div className=" md:space-y-4 pb-8 md:pb-32 flex justify-between items-center">
            <div>
              <h2 className="md:text-5xl text-white font-bold md:mt-24 md:mr-40">
                Welcome to
              </h2>
              <h3 className="text-[#5CFF58] md:text-6xl text-lg font-bold font-lobster md:ml-20 ml-4 md:mt-3">
                Bengal Chef Recipes
              </h3>
            </div>
            <img
              className="md:w-40 md:h-40 h-12 w-12 md:mr-28"
              src={food}
              alt=""
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 p-4 rounded-lg text-white text-[10px] md:text-xl text-center md:pb-28">
            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaEnvira className="text-[#5CFF58]" />
              <h3>Authentic Bengali flavors</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaConciergeBell className="text-[#5CFF58]" />
              <h3>Wide range of dishes</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaLeanpub className="text-[#5CFF58]" />
              <h3>Easy-to-follow instructions</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaRegLemon className="text-[#5CFF58]" />
              <h3>Healthy options</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaUserFriends className="text-[#5CFF58]" />
              <h3>Family-friendly foods</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaClock className="text-[#5CFF58]" />
              <h3>Special occasions</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaSeedling className="text-[#5CFF58]" />
              <h3>Fusion cuisine</h3>
            </div>

            <div className="flex items-center gap-3 shadow-md rounded-md md:p-4">
              <FaRegCheckCircle className="text-[#5CFF58]" />
              <h3>It's Delicious</h3>
            </div>
          </div>

          <p className="p-4 text-[#04ff00] text-[8px] md:text-2xl text-center font-lobster">
            "Experience Authentic Bengali Recipes - Guaranteed by Bengal Chef"
          </p>
        </div>
      </div>

      {/* map data to show our chefs */}
      <div className="mx-12 md:mx-36 my-6 md:my-20">
        <h1 className="text-lg text-center md:text-4xl font-bold md:font-lobster">
          Meet our awesome chefs
        </h1>
        <div className="grid md:grid-cols-2 w-fit gap-8 mx-auto my-12">
          {chefs?.map((chef) => (
            <ChefCards key={chef.id} chef={chef} />
          ))}
        </div>
      </div>

      {/* extra section 1: trending recipes */}
      <div className="mx-12 md:mx-36 my-6 md:my-20">
        <h1 className="text-lg text-center md:text-4xl font-bold md:font-lobster my-12">
          Trending now
        </h1>
        <Trending />
      </div>

      {/* extra section 2: customer review */}
      <div className="mx-12 md:mx-36 my-6 md:my-20">
        <h1 className="text-lg text-center md:text-4xl font-bold md:font-lobster">
          Our international customers
        </h1>
        <Reviews />
      </div>
    </>
  );
};

export default Home;
