import React, { useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import EditMenu from "./EditMenu";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = (color) => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    // making an authorized request to edit the given color based off of the id
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        // upon success, add the newly modified color into state
        updateColors([
          ...colors.filter((color) => color.id !== res.data.id),
          res.data,
        ]);
        setEditing(false);
      })
      .catch((err) => console.log(err.response));
  };

  const deleteColor = (color) => {
    // making an authorized request to delete the given color based off of the id
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then((res) => {
        // upon success, set the colors to the previous colors state minus the deleted color
        updateColors([...colors.filter((clr) => clr.id !== Number(res.data))]);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className='colors-wrap'>
      <p>colors</p>
      <ul>
        {colors.map((color) => (
          <li
            data-testid='color'
            key={color.color}
            onClick={() => editColor(color)}
          >
            <span>
              <span
                className='delete'
                onClick={(e) => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className='color-box'
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <EditMenu
          colorToEdit={colorToEdit}
          saveEdit={saveEdit}
          setColorToEdit={setColorToEdit}
          setEditing={setEditing}
        />
      )}
    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.
