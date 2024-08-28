import React, { useState } from 'react';
import Country from './components/Country';
import './App.css'; // Import the CSS file

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 1 },
    { id: 2, name: 'China', gold: 3, silver: 2, bronze: 0 },
    { id: 3, name: 'Germany', gold: 0, silver: 1, bronze: 2 },
  ]);

  const incrementMedal = (id, type) => {
    setCountries(countries.map(country =>
      country.id === id 
        ? { ...country, [type]: country[type] + 1 }
        : country
    ));
  };

  const decrementMedal = (id, type) => {
    setCountries(countries.map(country =>
      country.id === id && country[type] > 0
        ? { ...country, [type]: country[type] - 1 }
        : country
    ));
  };

  const totalMedals = countries.reduce((totals, country) => {
    totals.gold += country.gold;
    totals.silver += country.silver;
    totals.bronze += country.bronze;
    return totals;
  }, { gold: 0, silver: 0, bronze: 0 });

  return (
    <div className="App">
      <h1>Total Medals</h1>
      <p className="total-medals">
        Gold: {totalMedals.gold} | Silver: {totalMedals.silver} | Bronze: {totalMedals.bronze}
      </p>

      {countries.map(country => (
        <Country 
          key={country.id}
          {...country}
          onIncrement={(type) => incrementMedal(country.id, type)}
          onDecrement={(type) => decrementMedal(country.id, type)}
        />
      ))}
    </div>
  );
}

export default App;
