import axiosWithAuth from "../helpers/axiosWithAuth";

export const fetchColors = () => {
  return axiosWithAuth().get("http://localhost:5000/api/colors");
};
