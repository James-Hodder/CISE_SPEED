// components/NavBar/PopulatedNavBar.tsx
import { IoMdArrowDropdown } from "react-icons/io";
import { AppBar, Toolbar, Box, Container, Button } from "@mui/material";
import NavDropdown from "../nav/NavDropDown"; // Corrected path
import NavItem from "../nav/NavItem"; // Corrected path
import { FC } from "react";

interface PopulatedNavBarProps {
  toggleColorMode: () => void; // Define the type for toggleColorMode
}

const PopulatedNavBar: FC<PopulatedNavBarProps> = ({ toggleColorMode }) => {
  return (
    <AppBar position="static" role="navigation">
      <Container maxWidth="xl">
        {/* Ensures content spans full width, adjust maxWidth if needed */}
        <Toolbar disableGutters>
          {/* Removes extra padding */}
          <Box ml={0} flexGrow={1}>
            {/* Align "Home" to the left */}
            <NavItem route="/" end>
              Home
            </NavItem>
          </Box>
          <Box ml={4}>
            {/* Adds spacing for "Articles" */}
            <NavItem dropdown route="/articles">
              Articles <IoMdArrowDropdown />
              <NavDropdown>
                <NavItem route="/articles">View articles</NavItem>
                <NavItem route="/articles/submission">Submit articles</NavItem>
                <NavItem route="/articles/deletion">Delete articles</NavItem>
              </NavDropdown>
            </NavItem>
          </Box>
          <Box ml={4}>
            {/* Adds spacing for "Login" */}
            <NavItem route="/login/login">Login</NavItem>
          </Box>
          <Box ml={4}>
            {/* Adds spacing for "Registration" */}
            <NavItem route="/login/registrationPage">Register</NavItem>
          </Box>
          <Box ml={4}>
            {/* Button to toggle theme */}
            <Button
              onClick={toggleColorMode}
              variant="contained"
              style={{ backgroundColor: "primary.main", color: "white" }}
            >
              Toggle Theme
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PopulatedNavBar;
