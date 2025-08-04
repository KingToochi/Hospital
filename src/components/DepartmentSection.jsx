import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/9.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const listOfDepartments = [
  {
    departmentImage: image4,
    departmentName: "Eye",
    description: "Esteem spirit temper too say adieus who direct esteem.",
    moreLink: "Learn More",
  },
  {
    departmentImage: image5,
    departmentName: "Physical",
    description: "Esteem spirit temper too say adieus who direct esteem.",
    moreLink: "Learn More",
  },
  {
    departmentImage: image6,
    departmentName: "Dental",
    description: "Esteem spirit temper too say adieus who direct esteem.",
    moreLink: "Learn More",
  },
  {
    departmentImage: image7,
    departmentName: "Med Lab",
    description: "Esteem spirit temper too say adieus who direct esteem.",
    moreLink: "Learn More",
  },
  {
    departmentImage: image8,
    departmentName: "Skin Surgery",
    description: "Esteem spirit temper too say adieus who direct esteem.",
    moreLink: "Learn More",
  },
  {
    departmentImage: image9,
    departmentName: "Child Care",
    description: "Esteem spirit temper too say adieus who direct esteem.",
    moreLink: "Learn More",
  },
];

const Department = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listOfDepartments.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listOfDepartments.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listOfDepartments.length);
  };

  const current = listOfDepartments[currentIndex];

  return (
    <div className="text-center p-4 bg-gray-300">
      <div className="mx-auto max-w-md border rounded-md shadow-md p-4 md:hidden ">
        <img
          src={current.departmentImage}
          alt={current.departmentName}
          className="w-full h-auto rounded-lg"
        />
        <h1 className="text-xl font-bold mt-4">{current.departmentName}</h1>
        <h2 className="text-gray-600 my-2">{current.description}</h2>
        <Link
          to="/"
          className="inline-block mt-2 px-4 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition"
        >
          {current.moreLink}
        </Link>
        <div className="flex justify-between mt-4">
          <button className="cursor-pointer" onClick={handlePrev}>&larr; Prev</button>
          <button className="cursor-pointer" onClick={handleNext}>Next &rarr;</button>
        </div>
      </div>

      <div 
      className="hidden md:grid grid-cols-3 w-[90%] mx-auto gap-4"
      >
        {listOfDepartments.map((current, index) => (
          <div
          className="border-2 border-gray-900 rounded-lg"
          key={index} >
            <img  src={current.departmentImage}/>
            <h1 className="text-xl font-semibold text-blue-600">
              {current.departmentName}
            </h1>
            <h2 className="font-semibold text-base text-gray-800"> 
              {current.description}
            </h2>
            <Link 
            className=" mb-10 px-2 text-base font-bold text-blue-600"
            to="">{current.moreLink}</Link>
          </div>
        )
      )}
      </div>
    </div>
  );
};

export default Department;
