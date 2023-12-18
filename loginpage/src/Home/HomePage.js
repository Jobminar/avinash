import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
//git
const HomePage = () => {
  const navigate = useNavigate();
  const sameer = "sameer";
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4">Welcome to the Home Page</Typography>
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      <Typography>
        Welcome to Jobminar Company. How can I Assist You ...
      </Typography>
    </Container>
  );
};

export default HomePage;
