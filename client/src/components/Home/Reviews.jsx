import React from "react";
import dp1 from "../../assets/images/dp-1.JPG";
import dp2 from "../../assets/images/dp-2.JPG";
import dp3 from "../../assets/images/dp-3.JPG";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <>
      <div className="carousel w-full md:w-4/5 mx-auto rounded-xl md:h-96 mt-12">
        <div
          id="item1"
          className="carousel-item relative w-full bg-gradient-to-tl from-slate-800 to-slate-800"
        >
          <img
            src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-02-960x640.jpg.webp"
            className="w-full object-contain md:object-cover mix-blend-overlay"
          />

          <div className="absolute w-full mx-auto text-center">
            <img
              className="h-6 md:h-20 md:w-20 rounded-full w-6 mx-auto my-2 md:my-8"
              src={dp1}
              alt=""
            />
            <h2 className="text-[8px] md:text-xl md:font-bold font-lobster md:mb-2 mb-1 text-[#5CFF58]">
              Mehmat, Turkiye
            </h2>
            <p className="text-white px-6 md:mb-8 my-2 md:px-24 text-[8px] md:text-base">
              Bangladesh is rich in cuisine, and the recipes of Bengal Chef is
              truly something special. From the savory curries to the spicy
              chutneys, there's always something new and exciting to try. One of
              my favorite dishes is biryani, a rice-based dish that's typically
              made with chicken, beef, or mutton. The flavors are absolutely
              amazing, and it's definitely worth trying if you're in the area.
            </p>
            <label
              htmlFor="my-modal-4"
              className="bg-[#C19D60] px-2 py-1 md:py-2 rounded text-white hover:bg-[#d1952c] text-[8px] md:text-base my-3"
            >
              See ratings
            </label>
          </div>
        </div>

        <div
          id="item2"
          className="carousel-item relative w-full bg-gradient-to-tl from-slate-800 to-slate-800"
        >
          <img
            src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/12/26/bangladeshi-cuisines.jpg"
            className="w-full object-contain md:object-cover mix-blend-overlay"
          />

          <div className="absolute w-full mx-auto text-center">
            <img
              className="h-6 md:h-20 md:w-20 rounded-full w-6 mx-auto my-2 md:my-8"
              src={dp2}
              alt=""
            />
            <h2 className="text-[8px] md:text-xl md:font-bold font-lobster md:mb-2 mb-1 text-[#5CFF58]">
              Jean Dujardin, France
            </h2>
            <p className="text-white my-2 px-6 md:mb-8 md:px-24 text-[8px] md:text-base">
              I've had the pleasure of taught a variety of recipes in Bengal
              Chef, from samosas to dal and everything in between. One of my
              personal favorites is kabab, a type of fried pastry that's filled
              with spiced meat. It's the perfect snack when you're on the go,
              and it's incredibly satisfying too. If you're looking for a
              culinary adventure, be sure to give Bangladeshi food a try.
            </p>
            <label
              htmlFor="my-modal-4"
              className="bg-[#C19D60] px-2 py-1 md:py-2 rounded text-white hover:bg-[#d1952c] text-[8px] md:text-base my-3"
            >
              See ratings
            </label>
          </div>
        </div>

        <div
          id="item3"
          className="carousel-item relative w-full bg-gradient-to-tl from-slate-800 to-slate-800"
        >
          <img
            src="https://moha-mushkil.com/wp-content/uploads/2018/08/IMG_20180804_142445__01.jpg"
            className="w-full object-contain md:object-cover mix-blend-overlay"
          />

          <div className="absolute w-full mx-auto text-center">
            <img
              className="h-6 md:h-20 md:w-20 rounded-full w-6 mx-auto my-2 md:my-8"
              src={dp3}
              alt=""
            />
            <h2 className="text-[8px] md:text-xl md:font-bold font-lobster md:mb-2 mb-1 text-[#5CFF58]">
              David, USA
            </h2>
            <p className="text-white my-2 px-6 md:mb-8 md:px-24 text-[8px] md:text-base">
              I recently had the chance to learn recipes of some Bangladeshi
              food, and I have to say, I was blown away by the flavors. The
              spices and herbs used in their cooking really make each dish stand
              out, and I loved trying new things that I had never heard of
              before. Some highlights for me were the beef curry called
              Kalabhuna. I also tried the best sweet called Rashmalai.
            </p>
            <label
              htmlFor="my-modal-4"
              className="bg-[#C19D60] px-2 py-1 md:py-2 rounded text-white hover:bg-[#d1952c] text-[8px] md:text-base my-3"
            >
              See ratings
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn border-none bg-[#C19D60] btn-xs">
          1
        </a>
        <a href="#item2" className="btn border-none bg-[#C19D60] btn-xs">
          2
        </a>
        <a href="#item3" className="btn border-none bg-[#C19D60] btn-xs">
          3
        </a>
      </div>

      {/* Modal starts here */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Our Ratings:</h3>
          <p className="py-4 text-orange-500 flex items-center gap-2">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </p>
        </label>
      </label>
    </>
  );
};

export default Reviews;
