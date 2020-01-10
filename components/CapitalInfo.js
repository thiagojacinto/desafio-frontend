import React from 'react';

// import retrieveData from '../core-api';

export default function CapitalInfo(props) {

  // var data = retrieveData(props.city);
  var data = {
    main: {
      temp_min: 23,
      temp_max: 32
    }
  }
  
  const [ tempMin, tempMax ] = [data.main.temp_min, data.main.temp_max];
  
  return (
    <li className="capitalItem">
      <p className="cityName">{props.city}</p>
      <p className="temp">ᐱ Máx: {tempMax}&deg;</p>
      <p className="temp">ᐯ Min: {tempMin}&deg;</p>
    </li>
  );
}
