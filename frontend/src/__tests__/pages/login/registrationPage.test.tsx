import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationPage from '@/pages/login/registrationPage';

describe('Registration Page Input Fields', () => {
  it('should render the email, password, and confirm password input fields', () => 
    {
    console.log("Test for rendering input fields is running...");

    // Render the RegistrationPage component
    render(<RegistrationPage />);

    // Check if the email input field is rendered
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();

    // Check if the password input field is rendered using the specific name attribute
    expect(screen.getByLabelText(/password/i, { selector: 'input[name="password"]' })).toBeInTheDocument();

    // Check if the confirm password input field is rendered using the specific name attribute
    expect(screen.getByLabelText(/confirm password/i, { selector: 'input[name="confirmPassword"]' })).toBeInTheDocument();

    // Console log to confirm successful test
    console.log("All input fields are rendered successfully.");
  });

  // Sample test for successful registration
    it('should display a success message upon successful registration', async () => {

        // Render the RegistrationPage component
        render(<RegistrationPage />);

        global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ message: 'Registration successful' }),
        })
        ) as jest.Mock;
    
        fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
        fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
        await waitFor(() => {
        expect(screen.getByRole('alert')).toHaveTextContent(/user registered successfully/i);
        });
    });
});