import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextField, Button, Typography, Box, Paper, List, ListItem, Divider, Stack
} from '@mui/material';

const Dashboard = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [words, setWords] = useState([]);

  const fetchWords = async () => {
    const res = await axios.get('http://localhost:5000/api/words');
    setWords(res.data);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const handleAdd = async () => {
    if (text && category) {
      await axios.post('http://localhost:5000/api/words', { text, category });
      setText('');
      setCategory('');
      fetchWords();
    }
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
        Admin Dashboard
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Add New Word</Typography>
          <TextField
            label="Word"
            fullWidth
            value={text}
            onChange={e => setText(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Category"
            fullWidth
            value={category}
            onChange={e => setCategory(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleAdd}
            sx={{ backgroundColor: '#1976d2' }}
          >
            Add Word
          </Button>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, flex: 2, maxHeight: '500px', overflow: 'auto' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>All Words</Typography>
          <List>
            {words.map((word, idx) => (
              <React.Fragment key={word._id}>
                <ListItem>
                  <Box>
                    <Typography>{idx + 1}. {word.text}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      Category: <strong>{word.category || 'Uncategorized'}</strong>
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Dashboard;
