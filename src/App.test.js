import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Dont have a text that say's Hi", ()=>{
  render(<App />)
  
  expect(screen.queryByText(/hi/i)).not.toBeInTheDocument()
})