import React from "react";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const Recipes = () => {
  return (
    <div className="bg-[#E7DAD4]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Recipes;
