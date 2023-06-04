import React from "react";
import NavbarContent from "../navbarContent";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center  max-w-[1640px] mx-auto font-sans">
        <div className="flex items-center">
          <img
            className="w-[41px] h-[41px] rounded-full bg-blue-400"
            src="https://cdn.shopify.com/s/files/1/0242/5113/8103/files/logotttmblack_1_975b874f-0bd5-4990-9d75-a3809ceae63d.png?v=1630572589"
            alt="Logo"
          />
          <span className="mx-2 text-blue-950 font-bold text-[24px] leading-7">
            Trafalgar
          </span>
        </div>
        <div className="hidden lg:flex items-center justify-end w-full">
          <ul className="flex lg:items-center lg:flex-row">
            <li className="text-blue-950 font-bold mx-10 text-xl">Home</li>
            <li className="mx-10 text-violet-900 font-semibold text-xl">Find a doctor</li>
            <li className="mx-10 text-violet-900 font-semibold text-xl">Apps</li>
            <li className="mx-10 text-violet-900 font-semibold text-xl">Testimonials</li>
            <li className="mx-10 text-violet-900 font-semibold text-xl">About us</li>
          </ul>
        </div>
      </nav>
     <NavbarContent ></NavbarContent>
    </div>
  );
}

export default Navbar;
