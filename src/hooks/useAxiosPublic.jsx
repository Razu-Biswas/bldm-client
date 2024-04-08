import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bldmserver-side.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
