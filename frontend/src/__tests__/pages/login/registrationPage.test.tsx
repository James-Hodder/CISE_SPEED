import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationPage from '@/pages/login/registrationPage';

describe('Registration Page Input Fields', () => {
    beforeEach(() => {
       // Render the RegistrationPage component each time
        render(<RegistrationPage />); 
        
    });

  it('should render the email, password, and confirm password input fields', () => 
    {
    console.log("Test for rendering input fields is running...");

    

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

 
        global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ message: 'User registered successfully!' }),
        })
        ) as jest.Mock;
        
        // email 
        fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
       
        // password event 
        const passwordInput = screen.getAllByLabelText(/password/i)[0]
        fireEvent.change(passwordInput, { target: { value: 'thisIsAPassword' } })
        
        // confirm password event
        // const confPasswordInput = screen.getAllByLabelText(/confirm Password/i)[0]
        // fireEvent.change(confPasswordInput, { target: { value: 'thisIsAPassword' } })

        // // error confirm password event
        const errorConfPasswordInput = screen.getAllByLabelText(/confirm Password/i)[0]
        fireEvent.change(errorConfPasswordInput, { target: { value: 'I dont match' } })
        console.log("passwords do not match")
       
        // click the submission button event
        fireEvent.click(screen.getByRole('button', { name: /register/i}));
        
        // wait for sucess message 
        // will fail if the condition is not met
        await waitFor(() => {
            expect(screen.getByRole('alert')).toHaveTextContent(/User registered successfully!/i);
        });
        
        // log for code dev
        console.log("registration test sucsessfull");
       
    });
});