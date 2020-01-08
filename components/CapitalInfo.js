import React from 'react';

export default function CapitalInfo(props) {

  return (
    <li className="capitalItem">
      <p className="cityName">{props.city}</p>
      <p className="temp">Min: 23$deg;</p>
      <p className="temp">Máx: 33$deg;</p>
    </li>
  );
}
