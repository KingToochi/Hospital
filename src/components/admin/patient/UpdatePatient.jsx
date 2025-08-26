import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import { baseUrl } from "../../../api/baseUrl";
import axios from "../../../api/Axios";

const updatePatient = () => {
  const [patient, setPatient] = useState({});
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const url = `${baseUrl}patient`;
}

export default updatePatient;