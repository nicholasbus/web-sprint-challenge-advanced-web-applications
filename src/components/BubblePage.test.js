import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import BubblePage from "./BubblePage";
jest.mock("../helpers/axiosWithAuth");

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage />);
  axiosWithAuth.mockResolvedValueOnce({
    data: [
      {
        color: "black",
        code: {
          hex: "#000",
        },
        id: 1,
      },
      {
        color: "white",
        code: {
          hex: "#fff",
        },
        id: 2,
      },
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 3,
      },
    ],
  });

  await waitFor(() => {
    const colors = screen.queryAllByTestId("color");
    expect(colors).toHaveLength(3);

    const bubbles = screen.queryAllByTestId("bubble");
    expect(bubbles).toHaveLength(3);
  });
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
