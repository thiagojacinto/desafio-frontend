import React from 'react';

import convertMS from '../components/aux/msconvert';

export function Found(props) {

  return (
    <div className="found__location">
      <p className="cityName">{props.weather.name}, {props.weather.sys.country}</p>
      <div className="temperature">
        <p className="temp">
          Temperatura: {props.weather.main.temp}&deg;
        </p>
        <p className="condition">
          {props.weather.weather[0].main}
        </p>
      </div>
      <div className="miscInfo">

        <p className="sunrise">
          Amanhecer: {convertMS(props.weather.sys.sunrise)}</p>
        <p className="sunset">
          Pôr do sol: {convertMS(props.weather.sys.sunset)}</p>
      </div>
    </div>
  );

}