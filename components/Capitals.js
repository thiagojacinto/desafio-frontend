import React from 'react';

import CapitalInfo from './CapitalInfo';

export default function Capitals() {

  return (
    <div>
      <br />

      <ul>
        <CapitalInfo city='Recife' />
        <CapitalInfo city='João Pessoa' />
        <CapitalInfo city='Natal' />
        <CapitalInfo city='Fortaleza' />
      </ul>
    </div>
  );
}
