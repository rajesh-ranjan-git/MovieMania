import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../Constants/Navigation";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    navigate(`/search?q=${search}`);
  }, [search]);

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container flex items-center mx-auto px-4 h-full cursor-pointer">
        <Link to="/">
          <img
            className="absolute top-2 w-20 border-2 rounded-full"
            src="\logo.svg"
          />
          <span className="pl-24 font-makeba text-5xl">MovieMania</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 ml-5">
          {navigation.map((nav) => {
            return (
              <NavLink
                key={nav.label}
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                {nav.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search here..."
              className="hidden lg:block px-4 py-1 bg-transparent outline-none border-none"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>

          <div className="w-12 h-12 cursor-pointer bg-neutral-700 rounded-full border-[1px] active:scale-75 transition-all">
            <img className="rounded-full" src="\user.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
