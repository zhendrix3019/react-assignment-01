import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Country({ name, gold, onIncrement, onDecrement }) {
  return (
    <Card style={{ maxWidth: 400, margin: '0 auto', marginTop: '20px', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Country: {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Gold Medals: {gold}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onIncrement} 
          startIcon={<AddCircleOutlineIcon />}
          style={{ marginTop: '20px', marginRight: '10px' }}
        >
          Increment Gold Medal Count
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={onDecrement} 
          startIcon={<RemoveCircleOutlineIcon />}
          style={{ marginTop: '20px' }}
          disabled={gold === 0}
        >
          Decrement Gold Medal Count
        </Button>
      </CardContent>
    </Card>
  );
}

export default Country;
