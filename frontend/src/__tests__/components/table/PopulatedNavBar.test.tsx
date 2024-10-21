// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { SessionProvider } from "next-auth/react";
// import { useRouter } from 'next/router'; // Keep useRouter import as is
// import PopulatedNavBar from "@/components/table/PopulatedNavBar";

// // Mock the useRouter hook from Next.js
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// // Create a custom render function to handle the PopulatedNavBar props
// const renderNavBar = () => {
//   const routerMock = {
//     push: jest.fn(),
//     pathname: '/',
//     query: {},
//     asPath: '/',
//     route: '/',
//     events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
//     beforePopState: jest.fn(),
//     isFallback: false,
//   };

//   (useRouter as jest.Mock).mockReturnValue(routerMock);

//   return render(
//     <SessionProvider session={null}>
//       <PopulatedNavBar toggleColorMode={() => {}} /> {/* Mock toggle function */}
//     </SessionProvider>
//   );
// };

// describe("PopulatedNavBar Navigation", () => {
//   it("should navigate to the About page when the link is clicked", () => {
//     const router = useRouter() as unknown as jest.Mock;
//     const pushMock = jest.fn();
//     router.mockReturnValue({
//       push: pushMock,
//       pathname: '/',
//       query: {},
//       asPath: '/',
//       route: '/',
//       events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
//       beforePopState: jest.fn(),
//       isFallback: false,
//     });

//     // Render the NavBar component
//     renderNavBar();

//     // Click the link to navigate (make sure the text matches your actual component)
//     fireEvent.click(screen.getByRole("link", { name: "Go to About" })); // Adjust based on the actual link text

//     // Check that the push function was called with the correct path
//     expect(pushMock).toHaveBeenCalledWith("/about"); // Replace with your actual route
//   });
// });
