import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Medals from './Medals';
import '../App.css';  // Importing App.css to ensure styles are applied

function Country({ name, gold, silver, bronze, onIncrement, onDecrement }) {
  const totalMedals = gold + silver + bronze;

  return (
    <Card className="country-card">
      <CardContent>
        <Typography variant="h5" component="div">
          Country: {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Total Medals: {totalMedals}
        </Typography>

        <Medals type="gold" count={gold} onIncrement={onIncrement} onDecrement={onDecrement} />
        <Medals type="silver" count={silver} onIncrement={onIncrement} onDecrement={onDecrement} />
        <Medals type="bronze" count={bronze} onIncrement={onIncrement} onDecrement={onDecrement} />
      </CardContent>
    </Card>
  );
}

export default Country;
