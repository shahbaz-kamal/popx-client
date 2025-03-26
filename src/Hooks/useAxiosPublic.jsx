import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/",
  //   baseURL: "https://71-digital-sign-server.vercel.app/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
