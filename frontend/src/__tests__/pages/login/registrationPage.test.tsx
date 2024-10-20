import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegistrationPage from "@/pages/login/registrationPage"; // Adjust the path as needed

// Mocking the global fetch function
global.fetch = jest.fn();

describe("RegistrationPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display an error message when passwords do not match", async () => {
    render(<RegistrationPage />);

    // Fill in the registration form
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "differentPassword" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    // Check for the error message
    expect(await screen.findByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  it("should display a success message upon successful registration", async () => {
    // Mocking the fetch response for successful registration
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "User registered successfully!" }),
    });

    render(<RegistrationPage />);

    // Fill in the registration form with matching passwords
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    // Wait for and check for the success message
    expect(await screen.findByText(/User registered successfully/i)).toBeInTheDocument();
  });

  it("should display an error message upon failed registration", async () => {
    // Mocking the fetch response for failed registration
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: "Failed to register" }),
    });

    render(<RegistrationPage />);

    // Fill in the registration form with matching passwords
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    // Wait for and check for the error message
    expect(await screen.findByText(/Failed to register/i)).toBeInTheDocument();
  });
});
