import axios from "axios";
import { baseUrl } from "./baseUrl";

export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})
