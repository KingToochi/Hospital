// import useFetch from "../../../hooks/useFetch";
import useAuth from "../../../hooks/UseAuth";
import {baseUrl} from "../../../api/baseUrl";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useUpdate from "../../../hooks/useUpdate";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const UpdatePatientModal = ({ open, handleClose, patient }) => {
	//const post = usePost();
	const update = useUpdate();
	//const fetch = useFetch();
	const { auth } = useAuth();
	const url = `${baseUrl}patient`;
	// const queryClient = useQueryClient();
	// const [patient, setPatient] = useState({});
	//const [isLoading, setIsLoading] = useState(true)

	// const getPatient = async (url) => {
	// 	const result = await fetch(url, auth?.accessToken);
	// 	return result.data;
	// };

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm();

	// useEffect(() => {
	// 	if (patient) {
	// 		Object.entries(patient).forEach(([key, value]) => {
	// 			if (key == "dateOfBirth") {
	// 				setValue(key, value.slice(0, 10));
	// 			} else {
	// 				setValue(key, value);
	// 			}
	// 		});
	// 	}
	// }, [patient, setValue]);
		useEffect(() => {
	if (patient && typeof patient === "object") {
		Object.entries(patient).forEach(([key, value]) => {
			if (value !== undefined && value !== null) {
				if (key === "dateOfBirth" && typeof value === "string") {
					setValue(key, value.slice(0, 10));
				} else {
					setValue(key, value);
				}
			}
		});
	}
}, [patient, setValue]);

	const updatePatient = async (data) => {
		const response = await update(url, data, auth?.accessToken);
		console.log(response.data);
		return response.data;
	};

	// const { mutate } = useMutation(updatePatient, {
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries("patients");
	// 		reset({});
	// 		handleClose();
	// 		toast.success("Patient Updated Successfully");
	// 	},
	// });

	const handlePatientCreate = (patient) => {
		mutate(patient);
	};

	// console.log(data)
	return (
		<Modal
			open={open}
			onClose={() => {
				handleClose();
				reset({});
			}}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			{/* <!-- Main modal --> */}
			<div
				id="defaultModal"
				className=" overflow-y-auto overflow-x-hidden absolute top-8 md:inset-x-1/4 z-50 justify-center items-center w-screen lg:w-2/4  h-full">
				<div className="relative p-4 w-full max-w-2xl h-full md:h-auto ">
					{/* <!-- Modal content --> */}
					<div className="relative p-4 rounded-lg shadow bg-gray-50 dark:bg-gray-800 sm:p-5">
						{/* <!-- Modal header --> */}
						<div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Edit Patient
							</h3>
							<button
								type="button"
								onClick={() => {
									handleClose();
								}}
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-toggle="defaultModal">
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"></path>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<form onSubmit={handleSubmit(handlePatientCreate)}>
							<div className="grid gap-4 mb-4 sm:grid-cols-2">
								<div>
									<label
										htmlFor="firstname"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										First Name
									</label>
									<input
										type="text"
										name="firstname"
										id="firstname"
										{...register("firstname", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter First Name"
										required=""
									/>
									{errors.firstname && (
										<p className="text-sm text-red-500">
											{" "}
											first name is required{" "}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="lastname"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Last Name
									</label>
									<input
										type="text"
										name="lastname"
										id="lastname"
										{...register("lastname", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter Last Name"
										required=""
									/>
									{errors.lastname && (
										<p className="text-sm text-red-500">
											{" "}
											last name is required{" "}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Email
									</label>
									<input
										type="text"
										name="email"
										id="email"
										{...register("email", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter Email Address"
										required=""
									/>
									{errors.email && (
										<span className="text-sm text-red-500">
											{" "}
											email is required{" "}
										</span>
									)}
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										PhoneNumber
									</label>
									<input
										type="text"
										name="phone"
										id="phone"
										{...register("phone", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter the Phone Number"
										required=""
									/>
									{errors.phone && (
										<span className="text-sm text-red-500">
											{" "}
											Phone number is required{" "}
										</span>
									)}
								</div>
								<div>
									<label
										htmlFor="gender"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Gender
									</label>
									<select
										id="gender"
										{...register("gender", { required: "Gender is required" })}
										defaultValue={"Male"}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
										<option disabled value="default">
											Select Gender
										</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>

									{errors.gender && (
										<span className="text-sm text-red-400">
											{" "}
											{errors.gender?.message}{" "}
										</span>
									)}
								</div>
								<div>
									<label
										htmlFor="dateOfBirth"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Date of Birth
									</label>
									<input
										type="date"
										name="dateOfBirth"
										id="dateOfBirth"
										{...register("dateOfBirth", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter the Date of Birth"
										required=""
									/>
									{errors.dateOfBirth && (
										<span className="text-sm text-red-400">
											Date of Birth is required
										</span>
									)}
								</div>

								<div>
									<label
										htmlFor="weight"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Weight <span className="text-xs">(Optional)</span>
									</label>
									<input
										type="text"
										name="weight"
										id="weight"
										{...register("weight")}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter the Weight"
									/>
								</div>

								<div>
									<label
										htmlFor="height"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Height <span className="text-xs">(Optional)</span>
									</label>
									<input
										type="text"
										name="height"
										id="height"
										{...register("height")}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter the Height"
									/>
								</div>

								<div>
									<label
										htmlFor="emergencyContact"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Emergency Contact
									</label>
									<input
										type="text"
										name="emergencyContact"
										id="emergencyContact"
										{...register("emergencyContact", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter the Emergency Phone Number "
										required=""
									/>
									{errors.emergencyContact && (
										<span className="text-sm text-red-500">
											{" "}
											Emergency Contact is required{" "}
										</span>
									)}
								</div>

								<div>
									<label
										htmlFor="address"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Address
									</label>
									<input
										type="text"
										name="address"
										id="address"
										{...register("address", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter the Address"
										required=""
									/>
									{errors.address && (
										<span className="text-sm text-red-500">
											{" "}
											Address is required{" "}
										</span>
									)}
								</div>

								<div>
									<label
										htmlFor="bloodGroup"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Blood Group
									</label>
									<select
										id="bloodGroup"
										{...register("bloodGroup", {
											required: "Blood Group is required",
										})}
										defaultValue={"AA"}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
										<option disabled value="default">
											Select Blood Group
										</option>
										<option value="A+">A+</option>
										<option value="A-">A-</option>
										<option value="B+">B+</option>
										<option value="B-">B-</option>
										<option value="AB+">AB+</option>
										<option value="AB-">AB-</option>
										<option value="O+">O+</option>
										<option value="O-">O-</option>
									</select>

									{errors.bloodGroup && (
										<span className="text-sm text-red-400">
											{" "}
											{errors.bloodGroup?.message}{" "}
										</span>
									)}
								</div>

								<div>
									<label
										htmlFor="genotype"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Genotype
									</label>
									<select
										id="genotype"
										{...register("genotype", {
											required: "Genotype is required",
										})}
										defaultValue={"O+"}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
										<option disabled value="default">
											Select Genotype
										</option>
										<option value="AA">AA</option>
										<option value="AS">AS</option>
										<option value="AC">AC</option>
										<option value="SS">SS</option>
									</select>

									{errors.genotype && (
										<span className="text-sm text-red-400">
											{" "}
											{errors.genotype?.message}{" "}
										</span>
									)}
								</div>

								<div>
									<label
										htmlFor="status"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Patient Status
									</label>
									<select
										id="status"
										{...register("status", {
											required: "Patient Status is required",
										})}
										defaultValue={"Check-Up"}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
										<option disabled value="default">
											Select Status
										</option>
										<option value="Check-Up">Check-Up</option>
										<option value="Admitted">Admitted</option>
										<option value="Consultation">Consultation</option>
										<option value="Discharged">Discharged</option>
									</select>

									{errors.status && (
										<span className="text-sm text-red-400">
											{" "}
											{errors.status?.message}{" "}
										</span>
									)}
								</div>
								<div>
									<label
										htmlFor="patientNumber"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Patient Number
									</label>
									<input
										type="text"
										name="patientNumber"
										id="patientNumber"
										{...register("patientNumber", { required: true })}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Patient Number"
										required=""
									/>
									{errors.patientNumber && (
										<p className="text-sm text-red-500">
											{" "}
											Patient Number is required{" "}
										</p>
									)}
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="medicalHistory"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Medical History
									</label>
									<textarea
										id="medicalHistory"
										rows="4"
										{...register("medicalHistory", { required: true })}
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Write Patient medical History here"></textarea>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="allergies"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Allergies
									</label>
									<textarea
										id="allergies"
										rows="4"
										{...register("allergies", { required: true })}
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Write Patient allergies here"></textarea>
								</div>
							</div>
							<button
								type="submit"
								className="text-gray-900 dark:text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
								<svg
									className="mr-1 -ml-1 w-6 h-6 text-green-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
										clipRule="evenodd"></path>
								</svg>
								Edit Patient
							</button>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default UpdatePatientModal;
