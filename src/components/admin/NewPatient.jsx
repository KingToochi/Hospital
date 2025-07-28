import { useState } from "react";

const NewPatient = () => {
  const [formData, setformData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    weight: "",
    height: "",
    eContact: "",
    address: "",
    bloodGroup: "",
    genotype: "",
    patientStatus: "",
    patientNumber: "",
    medicalHistory: "",  
    gender: "", 
  });

  const [error, setError] = useState({});

  const validateForm = () => {
  const newErrors = {};

  if (!formData.fName.trim()) {
    newErrors.fName = "Field Required";
  }

  if (!formData.lName.trim()) {
    newErrors.lName = "Field Required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Field Required";
  } else if (!formData.email.includes("@")) {
    newErrors.email = "Enter valid email";
  }

  if (!formData.phoneNumber.trim()) {
    newErrors.phoneNumber = "Field Required";
  }

  if (!formData.gender.trim()) {
    newErrors.gender = "Field Required";
  }

  if (!formData.dob.trim()) {
    newErrors.dob = "Field Required";
  }

  if (!formData.eContact.trim()) {
    newErrors.eContact = "Field Required";
  }

  if (!formData.address.trim()) {
    newErrors.address = "Field Required";
  }

  if (!formData.bloodGroup.trim()) {
    newErrors.bloodGroup = "Field Required";
  }

  if (!formData.genotype.trim()) {
    newErrors.genotype = "Field Required";
  }

  return newErrors;
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateError = validateForm();
    if (Object.keys(validateError).length > 0) {
      setError(validateError);
      return;
}
 else {
      setError({});
    setformData({
      fName: "",
      lName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      weight: "",
      height: "",
      eContact: "",
      address: "",
      bloodGroup: "",
      genotype: "",
      patientStatus: "",
      patientNumber: "",
      medicalHistory: "",
      gender: "",
    });

    }
    console.log(setError);
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="flex flex-col w-full items-center justify center gap-10 p-4"
    >
      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1 ">
          <label
            htmlFor="fName"
            className="text-base font-medium text-gray-900"
          >
            First Name
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            type="text"
            onChange={handleChange}
            name="fName"
            value={formData.fName}
            placeholder="enter your first name"
            id="fName"
          />
          {error.fName && <p className="text-red-300 mb-2">{error.fName}</p>}
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1 ">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="lName"
          >
            {" "}
            Last Name{" "}
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            type="text"
            onChange={handleChange}
            name="lName"
            value={formData.lName}
            placeholder="enter your last name"
            id="lName"
          />
          {error.lName && <p className="text-red-300 mb-2">{error.lName}</p>}
        </div>
      </div>
      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1 ">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="email"
          >
            Email Address{" "}
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="enter your email address"
            id="email"
          />
          {error.email && <p className="text-red-300 mb-2">{error.email}</p>}
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="phoneNumber"
          >
            Phone Number{" "}
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            type="tel"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="phoneNumber"
            id="phoneNumber"
          />
          {error.phoneNumber && (
            <p className="text-red-300 mb-2">{error.phoneNumber}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="gender"
            id="gender"
            value={formData.gender}
          >
            <option
              value=""
              selected
              hidden
              disabled
              className="
                        text-base text-gray-600 font-light
                        "
            >
              Select Gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {error.gender && <p className="text-red-300 mb-2">{error.gender}</p>}
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1">
          <label className="text-base font-medium text-gray-900" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            type="date"
            id="dob"
            onChange={handleChange}
            name="dob"
            value={formData.dob}
          />
          {error.dob && <p className="text-red-300 mb-2">{error.dob}</p>}
        </div>
      </div>

      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="weight"
          >
            Weight (optional)
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="weight"
            value={formData.weight}
            id="weight"
            type="number"
            placeholder="enter your weight"
          />
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="height"
          >
            height (optional)
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="height"
            value={formData.height}
            id="height"
            type="number"
            placeholder="enter your height"
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="eContact"
          >
            Emergency Contact
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="eContact"
            id="eContact"
            value={formData.eContact}
            type="tel"
            placeholder="enter the emergency number"
          />
          {error.name && <p className="text-red-300 mb-2">{error.eContact}</p>}
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="address"
            id="address"
            value={formData.address}
            type="text"
            placeholder="enter your address"
          />
          {error.name && <p className="text-red-300 mb-2">{error.address}</p>}
        </div>
      </div>
      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="bloodGroup"
          >
            Blood Group{" "}
          </label>
          <select
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="bloodGroup"
            id="bloodGroup"
          >
            <option
              value=""
              selected
              hidden
              disabled
              className="
                        text-base text-gray-600 font-light
                        "
            >
              Select Blood Group
            </option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
          </select>
          {error.name && (
            <p className="text-red-300 mb-2">{error.bloodGroup}</p>
          )}
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="genotype"
          >
            Genotype{" "}
          </label>
          <select
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="genotype"
            id="genotype"
          >
            <option
              value=""
              selected
              hidden
              disabled
              className="
                        text-base text-gray-600 font-light
                        "
            >
              Select Genotype
            </option>
            <option value="AA">AA</option>
            <option value="AS">AS</option>
            <option value="SS">SS</option>
            <option value="AC">AC</option>
            <option value="SC">SC</option>
          </select>
          {error.name && <p className="text-red-300 mb-2">{error.genotype}</p>}
        </div>
      </div>

      <div className="flex justify-center items-center w-[80%] gap-4 ">
        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="patientStatus"
          >
            Patient Status
          </label>
          <select
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="patientStatus"
            id="patientStatus"
          >
            <option
              value=""
              selected
              hidden
              disabled
              className="
                        text-base text-gray-600 font-light
                        "
            >
              Select Status
            </option>
            <option value="sick">Sick</option>
            <option value="notSkick">Not Sick</option>
          </select>
        </div>

        <div className="flex flex-col bg- w-1/2 gap-1">
          <label
            className="text-base font-medium text-gray-900"
            htmlFor="patientNumber"
          >
            Patient Number
          </label>
          <input
            className="w-full px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
            onChange={handleChange}
            name="patientNumber"
            value={formData.patientNumber}
            id="patientNumber"
            type="text"
            placeholder="enter the patient number"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-left w-[80%] gap-4 ">
        <label
          className="text-base font-medium text-gray-900"
          htmlFor="medicalHistory"
        >
          Medical History
        </label>
        <textarea
          className="w-full h-[30vh] px-2 py-1 text-gray-900 text-base border-2 border-gray-600 rounded-lg"
          value={formData.medicalHistory}
          id="medicalHistory"
          onChange={handleChange}
          name="medicalHistory"
          placeholder="write patient medical history here"
        />
      </div>
      <button
      className="text-base font-medium text-gray-900 border-2 border-gray-600 rounded-lg cursor-pointer w-[100px]"
      type="submit">Add Patient</button>
    </form>
  );
};

export default NewPatient;
