import axios from "axios";

const axiosCommon = axios.create({
    baseURL: 'http://localhost:5173'
})

const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;