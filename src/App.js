import React, { useState } from 'react';
import Country from './components/Country';

function App() {
  // Initialize state with an array of country objects
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'Germany', gold: 0 },
  ]);

  // Function to increment gold for a specific country
  const incrementGold = (id) => {
    setCountries(countries.map(country => 
      country.id === id ? { ...country, gold: country.gold + 1 } : country
    ));
  };

  // Function to decrement gold for a specific country
  const decrementGold = (id) => {
    setCountries(countries.map(country => 
      country.id === id && country.gold > 0 
        ? { ...country, gold: country.gold - 1 } 
        : country
    ));
  };

  return (
    <div className="App">
      {countries.map(country => (
        <Country 
          key={country.id} 
          name={country.name} 
          gold={country.gold} 
          onIncrement={() => incrementGold(country.id)}
          onDecrement={() => decrementGold(country.id)}
        />
      ))}
    </div>
  );
}

export default App;
