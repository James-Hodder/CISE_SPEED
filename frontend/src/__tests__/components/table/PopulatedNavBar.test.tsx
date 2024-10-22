import Home from "@/pages/index";

import registrationPage from "@/pages/login/registrationPage";
import PopulatedNavBar from "@/components/table/PopulatedNavBar";
import { render, screen } from "@testing-library/react"; // Import render and screen from React Testing Library
import "@testing-library/jest-dom"; // Import custom matchers from Jest DOM

jest.mock("@/pages/_app");
jest.mock("@/pages/index");
jest.mock("@/pages/login/registrationPage");



jest.mock('@/components/table/PopulatedNavBar', () => ({
    __esModule: true,
    PopulatedNavBar: jest.fn(() => <div>Mocked PopulatedNavBar</div>),
}));
  

describe('Test suite', () => {
    it('should mock PopulatedNavBar', () => {
      // Mock the implementation
      (PopulatedNavBar as jest.Mock).mockImplementation(() => <div>Custom Mocked Implementation</div>);
  
      // Now you can render a component that uses PopulatedNavBar and test it
    });
  });

  describe('index', () => {
    it('renders the index with the PopulatedNavBar', () => {
        render(<Home />);
        const headerText = "Welcome to SPEED - Software Practice Empirical Evidence Database";
    
        // Get the heading element by its role and name
        const header = screen.getByRole('heading', { name: headerText });
        // Check if the Page title is rendered
       // expect(screen.getByText('Welcome to SPEED - Software Practice Empirical Evidence Database')).toBeInTheDocument();
  
        // Check if the PopulatedNavBar is rendered
        expect(screen.getByRole('navigation')).toBeInTheDocument();
  
      // Check if specific NavBar items are rendered
    //   expect(screen.getByText('Home')).toBeInTheDocument();
    //   expect(screen.getByText('Articles')).toBeInTheDocument();
    //   expect(screen.getByText('Login')).toBeInTheDocument();
    });
  });