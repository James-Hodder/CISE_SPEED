// pages/login/login.tsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setSuccessMessage("Login successful! Redirecting...");
      setErrorMessage(null);

      // Redirect to a protected page, or home page after login
      setTimeout(() => {
        router.push("/protected"); // Change to the page you want to redirect to
      }, 1000);
    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred");
      setSuccessMessage(null);
    }
  };

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

      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
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
