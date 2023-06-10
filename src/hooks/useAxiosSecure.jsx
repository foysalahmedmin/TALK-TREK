import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    useEffect(() => {
        axiosSecure.interceptors.request.use((req) => {
            const token = localStorage.getItem('TalkTrekToken') ;
            if (token) {
                req.headers.Authorization = `Bearer ${token}` ;
            }
            return req ;
        })
        axiosSecure.interceptors.response.use(res => res, async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                console.log(error.response);
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosSecure
};

export default useAxiosSecure;