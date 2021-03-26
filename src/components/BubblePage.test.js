import React from "react";
import { render, screen } from "@testing-library/react";
import { fetchColors as mockFetchColors } from "../api/fetchColors";
import BubblePage from "./BubblePage";
jest.mock("../api/fetchColors");

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
  // mockFetchColors.mockResolvedValueOnce({
  //   data: [
  //     {
  //       color: "black",
  //       code: {
  //         hex: "#000",
  //       },
  //       id: 1,
  //     },
  //     {
  //       color: "white",
  //       code: {
  //         hex: "#fff",
  //       },
  //       id: 2,
  //     },
  //     {
  //       color: "aliceblue",
  //       code: {
  //         hex: "#f0f8ff",
  //       },
  //       id: 3,
  //     },
  //   ],
  // });
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
