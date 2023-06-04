import React from "react";
import TrafalgarHeader from "../Img/TrafalgarHeader.png";

function NavbarContent() {
  return (
    <div className="flex items-center max-w-[1640px] mx-auto mt-[84px] ">
      <div className="flex flex-col">
        <h1 className="text-black font-bold text-5xl pb-5 ">
          Virtual healthcare <br />
          for you
        </h1>
        <span className="text-gray-700  text-2xl font-semibold leading-8 mt-5">
          Trafalgar provides progressive, and affordable healthcare,
        </span>
        <span className="text-gray-700  text-2xl font-semibold leading-8">
          accessible on mobile and online
        </span>
        <span className="text-gray-700  text-2xl font-semibold leading-8">
          for everyone
        </span>
        <button className="bg-blue-500  rounded-full text-white font-semibold w-[200px] h-[56px] mt-12">Consult now</button>
      </div>

      <div className="ml-auto">
        <img src={TrafalgarHeader} alt="Trafalgar Header" />
      </div>

      
    </div>
  );
}

export default NavbarContent;
