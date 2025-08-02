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
        className="w-full h-[20vh] flex flex-row
            lg:h-[80vh]
            "
      >
        <img className="w-full relatiive" src={image} alt="doctor's image" />
        <div
          className="w-auto text-base font-bold text-gray-900 flex flex-col items-center justify-centerbg-blue-300 absolute top-[15%] left-[5%]
                lg:top-[40%] lg:left-[10%]
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
            className="bg-blue-300 w-[22vw] text-center border-2 rounded-lg"
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
