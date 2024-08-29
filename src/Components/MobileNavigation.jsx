import React from "react";
import { mobileNavigation } from "../Constants/Navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="fixed bottom-0 lg:hidden w-full h-14 bg-neutral-600 bg-opacity-90 z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav) => {
          return (
            <NavLink
              key={nav.label + "mobileNavigation"}
              to={nav.href}
              className={({ isActive }) =>
                `px-4 flex flex-col items-center justify-center h-full ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
