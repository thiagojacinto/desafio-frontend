import React, { useState, useEffect } from 'react';

import { Found } from './FoundLocal';

export default function SearchForm(props) {

  const blankWeather = {
    "coord": { "lon": undefined, "lat": undefined },
    "weather": [
      {
        "id": undefined,
        "main": "",
        "description": "",
        "icon": ""
      }
    ],
    "base": "",
    "main": {
      "temp": undefined,
      "feels_like": undefined,
      "temp_min": undefined,
      "temp_max": undefined,
      "pressure": undefined,
      "humidity": undefined
    },
    "wind": {
      "speed": undefined,
      "deg": undefined
    },
    "clouds": {
      "all": undefined
    },
    "dt": undefined,
    "sys": {
      "type": undefined,
      "id": undefined,
      "message": undefined,
      "country": "",
      "sunrise": undefined,
      "sunset": undefined
    },
    "timezone": undefined,
    "id": undefined,
    "name": "",
    "cod": undefined
  }

  const [weather, setWeather] = useState(blankWeather);
  const [location, setLocation] = useState("");
  const [count, setCount] = useState(0);

  // function: handleSubmit to deal with submit button action
  function handleSubmit(event) {
    event.preventDefault();
    // alert('Searching...'); // placeholder
    const city = document.getElementsByClassName('search__value').city.defaultValue;
    console.log(city);    // Verify

    setLocation(city);    // Set the location
    setCount(count + 1);  // Changes count when clicked
    
  }

  function foundLocation() {
    return <Found weather={weather} />;
  }

  function undefinedLocation() {
    return (
      <p className="loading">Loading...</p>
    );
  }

  // function: JSX of found location data
  useEffect(() => {

    setInterval(() => {}, 2000);

    const keychain = 'a13ec42cc6dbb8f4dd28dcd88312d0ca';
    // URL management: 
    const basicUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
    const appendKey = `&appid=` + keychain;
    var finalUrl = basicUrl + location + appendKey + `&units=metric&lang=pt_br`;;

    // Fetching:
    fetch(finalUrl)
      .then(resp => resp.json())
      .then(data => {
        // Changes 'weather' state:
        setWeather(data);
      });
  }, [location]);

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
      { (count > 1) ?
        (location !== '' ? foundLocation() : undefinedLocation())
        : <br />
      }
    </div>
  );
}