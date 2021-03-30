import axios from "axios";

export const axiosWithAuth = () => {
  // grabbing the token from local storage
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      // setting the auth token as a header for future requests
      authorization: token,
    },
  });
};

//Task List:
//Build and export a function used to send in our authorization token
