import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // ✅ Save JWT token for future requests
      localStorage.setItem('token', res.data.token);

      onLogin(true); // move to dashboard
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={4} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        <TextField label="Username" fullWidth margin="normal" value={username} onChange={e => setUsername(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" fullWidth onClick={handleLogin} sx={{ marginTop: 2 }}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
