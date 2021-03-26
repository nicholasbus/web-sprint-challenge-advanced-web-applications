import React, { useEffect, useState } from "react";
import { fetchColors } from "../api/fetchColors";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    // fetchColors function to make get request (../api/fetchColors)
    fetchColors()
      .then((res) => {
        // set the color list to the returned data
        setColorList(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
