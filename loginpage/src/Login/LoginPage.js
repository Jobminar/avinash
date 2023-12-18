// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography, Box } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [error, setError] = useState('');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    if (!isEmailValid || !password) {
      setError('Please enter a valid email and password.');
      return;
    }
    if(email==="admin@jobminar.com" && password==="admin"){
      navigate('/home');
    }
    else{
      setError('Email or Password is incorrect');
    }
  };

  const handleEmailChange = (e) => {
    setTouched((prev) => ({ ...prev, email: true }));
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setTouched((prev) => ({ ...prev, password: true }));
    setPassword(e.target.value);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
          Login
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
          error={touched.email && !isEmailValid}
          helperText={touched.email && !isEmailValid ? 'Enter a valid email address' : ''}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px', width: '120px' }}
          onClick={handleLogin}
          disabled={!isEmailValid || !password}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
