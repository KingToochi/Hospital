
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const listOfServices = [
  {
    logo: <FontAwesomeIcon icon={["fas", "heartbeat"]} />,
    title: "Hospitality",
    description: (
      <>
        Clinical excellence must be the priority <br /> for any health care
        service provider.
      </>
    ),
    linkText: "Apply For Bed",
  },
  {
    logo: <FontAwesomeIcon icon={["fas", "ambulance"]} />,
    title: "Emergency Care",
    description: (
      <>
        Clinical excellence must be the priority <br /> for any health care
        service provider.
      </>
    ),
    linkText: "+2349031183272",
  },
  {
    logo: <FontAwesomeIcon icon={["fas", "stethoscope"]} />,
    title: "Chamber Service",
    description: (
      <>
        Clinical excellence must be the priority <br /> for any health care
        service provider.
      </>
    ),
    linkText: "Make an Appointment",
  },
];

const ServiceList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay for mobile (slider)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listOfServices.length)
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listOfServices.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listOfServices.length);
  };

  return (
    <div className="w-full px-2 py-2 bg-gray-200">
      {/* Mobile: show one card */}
      <div className="md:hidden">
        <div className="text-center border-2 border-gray-600 rounded-lg h-auto px-2 py-4">
          <h1 className="text-3xl">{listOfServices[currentIndex].logo}</h1>
          <h1 className="text-2xl text-gray-900 font-bold">
            {listOfServices[currentIndex].title}
          </h1>
          <h2 className="text-xl font-medium text-gray-600 my-2">
            {listOfServices[currentIndex].description}
          </h2>
          <Link className="rounded-lg p-1 text-gray-600 text-base font-semibold border">
            {listOfServices[currentIndex].linkText}
          </Link>
        </div>
        <div className="w-full pr-4 absolute top-[34vh] flex justify-between text-2xl">
          <button type="button" onClick={handlePrev}>
            <FontAwesomeIcon icon={["fas", "angle-left"]} />
          </button>
          <button type="button" onClick={handleNext} className="right-0">
            <FontAwesomeIcon icon={["fas", "angle-right"]} />
          </button>
        </div>
      </div>

      {/* Desktop: show all cards */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-4">
        {listOfServices.map((service) => (
          <div
            key={service.title}
            className="text-center border-2 border-gray-600 rounded-lg h-auto px-2 py-4"
          >
            <h1 className="text-3xl">{service.logo}</h1>
            <h1 className="text-2xl text-gray-900 font-bold">
              {service.title}
            </h1>
            <h2 className="text-xl font-medium text-gray-600 my-2">
              {service.description}
            </h2>
            <Link className="rounded-lg p-1 text-gray-600 text-base font-semibold border">
              {service.linkText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
