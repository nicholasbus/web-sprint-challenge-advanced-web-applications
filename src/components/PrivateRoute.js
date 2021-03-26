import React from "react";
import { Route, Redirect } from "react-router-dom";

// destructuring props
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest} // props
      render={(props) => {
        if (localStorage.getItem("token")) {
          // if there is a token in local storage render the given component
          return <Component {...props} />;
        } else {
          // if there is not a token in local storage, redirect to root path
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

export default PrivateRoute;

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
