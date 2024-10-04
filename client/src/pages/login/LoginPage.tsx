import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form fields after login attempt
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link to="/RegisterPage" style={{ color: "blue" }}>
                Register
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
