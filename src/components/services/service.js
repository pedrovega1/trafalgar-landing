import React from "react";
import Consultation from "../services/servicesImg/Consultation.png";
import DetailsInfo from "../services/servicesImg/DetailsInfo.png";
import EmergencyCare from "../services/servicesImg/EmergencyCare.png";
import OnlinePharmacy from "../services/servicesImg/OnlinePharmacy.png";
import SearchDoctor from "../services/servicesImg/SearchDoctor.png";
import Tracking from "../services/servicesImg/Tracking.png";
import TrafalgarHealth from "../services/servicesImg/TrafalgarHealth.png";
import TrafalgarMobile from "../services/servicesImg/TrafalgarMobile.png";

const services = [
  {
    name: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    img: SearchDoctor,
  },
  {
    name: "Online pharmacy",
    text: "Free consultation with our trusted doctors and get the best recommendations",
    img: OnlinePharmacy,
  },
  {
    name: "Consultation",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    img: Consultation,
  },
  {
    name: "Details info",
    text: "Free consultation with our trusted doctors and get the best recommendations",
    img: DetailsInfo,
  },
  {
    name: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    img: EmergencyCare,
  },
  {
    name: "Tracking",
    text: "Track and save your medical history and health data",
    img: Tracking,
  },
];

function Service() {
  return (
    <div className="mt-[192px] max-w-[1640px] mx-auto flex flex-col items-center font-sans">
      <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-black font-bold text-4xl">Our Services</h1>
        <span className="text-gray-700  text-xl font-semibold leading-8">
          We provide you with the best choices for your health needs and make
          sure you undergo treatment.
        </span>
        <span className="text-gray-700  text-xl font-semibold leading-8">
          With our highly qualified doctors, you can consult with us to
          determine which type of service is suitable for your health.
        </span>
      </div>
      <div className="grid grid-cols-3 mt-[80px] gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center mt-[34px]">
            <img
              src={service.img}
              alt={service.name}
              className="rounded-xl w-[100px] h-[100px] object-cover"
            />
            <h2 className="font-bold text-black text-2xl mt-3">{service.name}</h2>
            <p className="text-gray-700  text-sm font-semibold leading-8">
              {service.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[72px]">
        <button className="text-blue-400 bg-slate-200 rounded-full font-bold text-lg  w-[200px] h-[56px] border-sky-500 border-2 hover:border-dotted ">
          Learn More
        </button>
      </div>
      </div>
{/* Trafalgar Health */}
      <div className="flex items-center font-sans mt-[220px]">
        <div className="max-w-[650px]">
          <img src={TrafalgarHealth} alt="Trafalgar Health" />
        </div>

        <div className="flex flex-col ml-[142px]">
          <h2 className="text-black font-bold text-5xl pb-5">
            Leading healthcare providers
          </h2>

          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            Trafalgar provides progressive, and affordable
          </span>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            healthcare, accessible on mobile and online for
          </span>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            everyone. To us, it’s not just work. We take pride
          </span>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            in the solutions we deliver
          </span>

          <button className="text-blue-400 mt-8 bg-slate-200 rounded-full font-bold text-lg w-[200px] h-[56px] border-sky-500 border-2 hover:border-dotted">
            Learn More
          </button>
        </div>
      </div>

      {/* Mobile Div */}
      <div className="flex items-center font-sans  mt-[261px]">
        <div className="flex flex-col">
          <h2 className="text-black font-bold text-5xl pb-5">
            Download our mobile apps
          </h2>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            Our dedicated patient engagement app and
          </span>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            web portal allow you to access information
          </span>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            instantaneously (no tedious form, long calls,
          </span>
          <span className="text-gray-700 text-2xl font-semibold leading-8 mt-5">
            or administrative hassle) and securely
          </span>
          <button className="text-blue-400 mt-8 bg-slate-200 rounded-full font-bold text-lg w-[200px] h-[56px] border-sky-500 border-2 hover:border-dotted">
            Learn More
          </button>
        </div>
        <div className="max-w-[640px] ml-[71px]">
          <img
            src={TrafalgarMobile}
            alt="Trafalgar Mobile"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
