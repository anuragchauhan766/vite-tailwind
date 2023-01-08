import React, { useState } from "react";
import GetStarted from "../button";
import Menu from "./menu";

function Navbar() {
  const [show, setShow] = useState("false");
  const toggleClass = () => {
    setShow(!show);
  };
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="img/logo.svg" alt="" />
        </div>
        <div className=" hidden md:flex space-x-6">
          <Menu />
        </div>
        <div className="hidden md:block">
          <GetStarted />
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleClass}
        >
          <img src="img/menu.png" alt="" />
        </button>
      </div>
      <div className="md:hidden">
        {show && (
          <div className="absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
