import axios from "../api/axios";

const usePost = () => {

    const postData = async (URL, data, token) => {
        // let result;

        try {
            const response = await axios.post(URL, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    };

    return postData;
}

export default usePost;