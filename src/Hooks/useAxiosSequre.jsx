import axios from "axios";

const axiosSequre = axios.create({
  baseURL: "https://jobstack-backend-teal.vercel.app",
});

const useAxioSequre = () => {
  return [axiosSequre];
};

export default useAxioSequre;
