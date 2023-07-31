import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // log out handle
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="bg-[#441B11]">
      <div className="px-4 md:px-8 py-4 md:py-3 mx-auto sm:max-w-xl md:max-w-screen-xl">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            className="btn btn-ghost text-[#5CFF58] normal-case text-3xl font-lobster hover:text-[#04d301]"
          >
            Bengal Chef
          </Link>

          <ul className="items-center hidden space-x-8 md:flex font-semibold text-white">
            <li className="px-4 py-2">
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li className="  px-4 py-2 rounded-lg">
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li className="  px-4 py-2 rounded-lg">
              <NavLink
                to="/about"
                aria-label="About"
                title="About"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="items-center hidden md:flex">
            {user && (
              <div className="avatar online md:mr-5">
                <div className=" w-11 rounded-full">
                  <img
                    src={user.photoURL ? user.photoURL : ""}
                    title={user.displayName ? user.displayName : ""}
                  />
                </div>
              </div>
            )}

            <div>
              {user ? (
                <button
                  title="Log out"
                  onClick={handleLogOut}
                  className="text-white text-2xl hover:text-red-500 px-3"
                >
                  <FaPowerOff />
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn border-none bg-[#C19D60] text-white hover:bg-[#d1952c] normal-case px-6">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="-ml-8 pt-3 transition duration-400 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-[64px] right-0 w-40">
                <div className="p-5 bg-[#441B11] border-none rounded-b-md shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                          Home
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className=""
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-white" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 ml-2">
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Blogs"
                          title="Blogs"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="About"
                          title="About"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                    <Link to="/login">
                      <button className="border-none bg-[#C19D60] text-white hover:bg-[#d1952c] normal-case mt-3 ml-2 rounded px-3 py-1">
                        Login
                      </button>
                    </Link>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
