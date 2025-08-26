// Import the axios HTTP client library
import axios from "axios";

// Import a predefined base URL from another file (baseUrl.js)
import { baseUrl } from "./baseUrl";

// Create and export a pre-configured axios instance
// This instance will automatically use:
// 1. The base URL from baseUrl.js for all requests.
// 2. A default "Content-Type" header set to "application/json".
export default axios.create({
    baseURL: baseUrl, // Base part of the API URL, e.g., "https://api.example.com"
    headers: {
        "Content-Type": "application/json", // Tell the server we're sending JSON data
    },
});


// What this code does in plain English:
// Instead of writing axios.get(baseUrl + "/endpoint") every time, you create a custom axios instance with a predefined base URL and headers.