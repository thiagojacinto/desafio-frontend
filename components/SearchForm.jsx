import React, { useState, useEffect } from 'react';

// import retrieveData from '../core-api';

export default function SearchForm(props) {

  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");
  const [count, setCount] = useState(0);

  // function: handleSubmit to deal with submit button action
  function handleSubmit(event) {
    event.preventDefault();
    // alert('Searching...'); // placeholder
    const city = document.getElementsByClassName('search__value').city.defaultValue;
    console.log(city);

    setLocation(city);    // Set the location
    setCount(count + 1);  // Changes count when clicked

    setInterval(() => {
      (weather !== null) ?
        foundLocation()
        : undefinedLocation();
    }, 300)
    
  }

  function foundLocation() {
    return (
      <div className="found__location">
        <p className="cityName">{weather.name}, {weather.sys.country}</p>
        <div className="temperature">
          <p className="temp">
            Temperatura: {weather.main.temp}&deg;
        </p>
          <p className="condition">
            {weather.weather[0].main}
          </p>
        </div>
        <div className="miscInfo">

          <p className="sunrise">Amanhecer: {weather.sys.sunrise}</p>
          <p className="sunset">Pôr do sol: {weather.sys.sunset}</p>
        </div>
      </div>
    );
  }

  function undefinedLocation() {
    return (
      <p className="loading">Loading...</p>
    );
  }

  // function: JSX of found location data
  useEffect(() => {

    const keychain = 'a13ec42cc6dbb8f4dd28dcd88312d0ca';
    // URL management: 
    const basicUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
    const appendKey = `&appid=` + keychain;
    var finalUrl = basicUrl + location + appendKey;

    // Fetching:
    fetch(finalUrl)
      .then(resp => resp.json())
      .then(data => {
        
        setWeather(data);
        console.log(data);
      });

  }, []);

  return (
    <div className="search__input">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          <input
            type='text'
            name='city'
            className='search__value'
            value={props.city}
            placeholder='Insira aqui o nome da cidade'
            onChange={(event) => props.handleChange(event)}
          />
        </label>
        <button className='search__icon'>&#9906;</button>
      </form>
    </div>
  );
}