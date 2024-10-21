import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyApp from "@/pages/_app"; // Import MyApp instead of Home
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app"; // Import AppProps type
import { useRouter } from 'next/router'; // Keep useRouter import as is

// Mock the useRouter hook from Next.js
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock the PopulatedNavBar component for direct testing
jest.mock("@/components/table/PopulatedNavBar", () => {
  return function MockedPopulatedNavBar({ toggleColorMode }: { toggleColorMode: () => void }) {
    return (
      <div>
        <div role="button" onClick={toggleColorMode}>Toggle Dark Mode</div>
      </div>
    );
  };
});

// Create a custom render function to handle the MyApp props
const renderMyApp = (props: Partial<AppProps>) => {
  const routerMock = {
    push: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
    route: '/',
    events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
    beforePopState: jest.fn(),
    isFallback: false,
  };

  const defaultProps: AppProps = {
    Component: () => <div>Mock Component</div>, // Provide a default component
    pageProps: {},
    router: routerMock as any, // Include router and cast to any
    ...props,
  };

  return render(
    <SessionProvider session={null}> {/* Pass session directly here */}
      <MyApp {...defaultProps} />
    </SessionProvider>
  );
};

describe("Dark Mode Toggle", () => {
  it("should toggle between light and dark modes", () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
      route: '/',
      events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
      beforePopState: jest.fn(),
      isFallback: false,
    });

    // Render the MyApp component with required props
    renderMyApp({});

    // Ensure the toggle button is present
    expect(screen.getByRole("button", { name: "Toggle Dark Mode" })).toBeInTheDocument();

    // Check initial class (assumed to be light mode by default)
    expect(document.body).toHaveClass("light"); // Replace with your actual light mode class

    // Simulate click to toggle dark mode
    fireEvent.click(screen.getByRole("button", { name: "Toggle Dark Mode" }));

    // Check that the document body has the class indicating dark mode
    expect(document.body).toHaveClass("dark"); // Replace with your actual dark mode class

    // Toggle back to light mode
    fireEvent.click(screen.getByRole("button", { name: "Toggle Dark Mode" }));

    // Check that the document body does not have the class indicating dark mode
    expect(document.body).not.toHaveClass("dark"); // Ensure it does not have the dark class
    expect(document.body).toHaveClass("light"); // Ensure it has the light class back
  });
});
