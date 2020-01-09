import React from 'react';

export default function CapitalInfo(props) {

  const [ tempMin, tempMax ] = [23, 32];

  return (
    <li className="capitalItem">
      <p className="cityName">{props.city}</p>
      <p className="temp">ᐱ Máx: {tempMax}&deg;</p>
      <p className="temp">ᐯ Min: {tempMin}&deg;</p>
    </li>
  );
}
