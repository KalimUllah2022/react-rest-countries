import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect( () => { 
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Visiting Every Country of the world!!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {/* {
        countries.map(country => <p>{ country.name.common }</p>)
      } */}
      {
        countries.map(country => <Country name={country.name} population={country.population} flags={ country.flags }></Country>)
      }
     </div>
   )
}
 
function Country(props) { 
  return (
    <div id='countriesContainer'>
      <div className="countriesDiv">
        <h2>Name: {props.name.common}</h2>
        <h4>Population: {props.population}</h4>
        <img src={ props.flags.png } alt="" />
      </div>
    </div>
  )
}

export default App;
