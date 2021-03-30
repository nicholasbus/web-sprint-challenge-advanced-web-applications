import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import BubblePage from "./BubblePage";

// create the mock for the api call
// mock returns a function called fetchColors that returns a promise with the mock data
jest.mock("../api/fetchColors", () => {
  return {
    fetchColors: function () {
      return Promise.resolve({
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
    },
  };
});

test("Renders BubblePage without errors", () => {
  // Arrange : render app with mock api call
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Arrange : render app
  render(<BubblePage />);
  // Act : mock api call (api gets called on mount and is mocked before tests are made)

  // Assert : get color list and circles and make sure they are there
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
