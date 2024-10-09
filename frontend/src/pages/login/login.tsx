// pages/login/login.tsx
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Email" variant="outlined" margin="normal" fullWidth />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: "16px" }}>
        Don’t have an account?{" "}
        <Link href="/login/registrationPage" passHref>
          <Button color="primary">Register</Button>
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
