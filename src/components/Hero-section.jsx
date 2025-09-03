import { Link } from "react-router-dom";
import image from "../assets/images/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Services from "./Services";
import ServiceList from "./Services";
const Hero_section = () => {
  return (
    <section className="w-full flex flex-col ">
      <div
        className="w-full h-[40vh] flex flex-row
            lg:h-[80vh]
            "
      >
        <img className="w-full relatiive" src={image} alt="doctor's image" />
        <div
          className="w-auto px-2 py-4 flex flex-col md:text-base text-sm font-bold text-gray-700 flex flex-col items-center gap-2 absolute top-[15%] sm:left-[5%]
                lg:top-[40%] lg:left-[10%] text-center
                "
        >
          <h1 className="">Health care </h1>
          <h2 className="">for Whole Family</h2>
          <p className="">
            In healthcare sectors, service excellence is the facility <br />
            of the hospital as healthcare service providers to consistently
          </p>
          <Link
            to="/"
            className="bg-blue-300 w-auto px-2 text-center border-2 rounded-lg"
          >
            Check Our Services
          </Link>
        </div>
      </div>

      <div w-full>
        <ServiceList />
      </div>
    </section>
  );
};

export default Hero_section;
