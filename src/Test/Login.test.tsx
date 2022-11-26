import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../pages/Login.jsx";

test("renders learn react", () => {
  render(<Login />);
  const text = screen.getByText(/Preencha seu nome para iniciar a decolagem./i);
  expect(text).toBeInTheDocument();
});
