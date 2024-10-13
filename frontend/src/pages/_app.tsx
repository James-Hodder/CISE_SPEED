import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PopulatedNavBar from "../components/table/PopulatedNavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState, useMemo } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Custom theme with different colors for light and dark mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode colors
                primary: {
                  main: "#1976d2", // Customize your primary color
                },
                secondary: {
                  main: "#ff4081", // Customize your secondary color
                },
                background: {
                  default: "#f5f5f5", // Custom background color
                  paper: "#ffffff",
                },
                text: {
                  primary: "#000000",
                  secondary: "#555555",
                },
              }
            : {
                // Dark mode colors
                primary: {
                  main: "#90caf9", // Customize your primary color for dark mode
                },
                secondary: {
                  main: "#f48fb1", // Customize your secondary color for dark mode
                },
                background: {
                  default: "#121212", // Custom dark background
                  paper: "#1e1e1e",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#aaaaaa",
                },
              }),
        },
        typography: {
          fontFamily: "'Roboto', sans-serif", // Customize typography if needed
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PopulatedNavBar toggleColorMode={toggleColorMode} />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
