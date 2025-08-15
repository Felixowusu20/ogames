import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'ogames' && password === 'ogames123') {
      onLogin(true);
    } else {
      setError('Invalid credentials');
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
