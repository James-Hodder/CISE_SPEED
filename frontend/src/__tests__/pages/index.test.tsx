import react from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";

describe("Home page", () => {
    it("should render with no issues", () => {
      render(<Home />);
      const headerText = "Welcome to SPEED - Software Practice Empirical Evidence Database";
  
      // Use getByRole with the name option to find the specific heading
      const header = screen.getByRole('heading', { name: headerText });
      expect(header).toHaveTextContent(headerText);
    });
  });