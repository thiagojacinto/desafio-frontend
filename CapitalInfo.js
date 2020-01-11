import React, { useState, useEffect } from 'react';

export default function CapitalInfo(props) {

  var initialData = {
    "temp": undefined,
    "feels_like": undefined,
    "temp_min": undefined,
    "temp_max": undefined,
    "pressure": undefined ,
    "humidity": undefined
  }
  
  const [ temperature, setTemperature ] = useState(initialData);

  
  useEffect(() => {

    const keychain = 'a13ec42cc6dbb8f4dd28dcd88312d0ca';
    // URL management: 
    const basicUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
    const appendKey = `&appid=` + keychain + `&units=metric&lang=pt_br`;
    var finalUrl = basicUrl + props.city + appendKey;

    // Fetching:
    fetch(finalUrl)
      .then(resp => resp.json())
      .then(data => {
        // Changes 'temperature' state:
        setTemperature(data.main);
      });
  }, [props.city]);

  return (
    <li className="capitalItem">
      <p className="cityName">{props.city}</p>
      <p className="temp">ᐱ Máx: {temperature.temp_max}&deg;</p>
      <p className="temp">ᐯ Min: {temperature.temp_min}&deg;</p>
      <p className="humidity">Umidade: {temperature.humidity}%</p>
    </li>
  );
}
