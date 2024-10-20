import React from "react"; // Import React for JSX support
import { render, screen } from "@testing-library/react"; // Import render and screen from React Testing Library
import "@testing-library/jest-dom"; // Import custom matchers from Jest DOM
import Home from "@/pages/index"; // Import the Home component to be tested

// Describe block for grouping related tests for the Home page
describe("Home page", () => {
  
  // Test to verify that the welcome header renders correctly
  it("should render the welcome header", () => {
    render(<Home />); // Render the Home component

    // Define the expected header text
    const headerText = "Welcome to SPEED - Software Practice Empirical Evidence Database";
    
    // Get the heading element by its role and name
    const header = screen.getByRole('heading', { name: headerText });
    
    // Assert that the header contains the correct text
    expect(header).toHaveTextContent(headerText);
  });

  // Test to verify that the About section renders correctly
  it("should render the About section", () => {
    render(<Home />); // Render the Home component

    // Get the About section header by its role and name
    const aboutHeader = screen.getByRole('heading', { name: "About SPEED" });
    expect(aboutHeader).toBeInTheDocument(); // Assert that the About header is present

    // Regex to match part of the About text
    const aboutText = /SPEED, short for Software Practice Empirical Evidence Database/;
    expect(screen.getByText(aboutText)).toBeInTheDocument(); // Assert that the About text is present
  });

  // Test to verify that the list of features renders correctly
  it("should render the list of features", () => {
    render(<Home />); // Render the Home component
    
    // Get the features section header
    const featuresHeader = screen.getByRole('heading', { name: "What We Offer" });
    expect(featuresHeader).toBeInTheDocument(); // Assert that the features header is present
    
    // Define the expected feature items
    const features = [
      "Article Submission",
      "Moderation",
      "Analysis",
      "Database Entry"
    ];

    // Loop through each feature and assert its presence in the document
    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  // Test to verify that secondary descriptions for each feature render correctly
  it("should render secondary descriptions for each feature", () => {
    render(<Home />); // Render the Home component

    // Define the expected secondary descriptions using regex for flexibility
    const descriptions = [
      /We encourage anyone from the public to propose articles for inclusion in SPEED/i,
      /Our dedicated team of experts from the Software Engineering Research Center \(SERC\) serves as moderators/i,
      /Our team of Analysts, who are SERC staff members, carefully read and analyze the approved articles/i,
      /The extracted information is then entered into the SPEED database/i
    ];

    // Loop through each description and assert its presence in the document
    descriptions.forEach(description => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });
});
