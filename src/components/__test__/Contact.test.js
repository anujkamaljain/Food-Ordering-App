import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    //Querying
    const heading = screen.getAllByRole("heading");
    //Assertion
    expect(heading.length).toBe(2);
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);
    const inputBox = screen.getByPlaceholderText(
      "Please enter your message here!!",
    );
    expect(inputBox).toBeInTheDocument();
  });
});
