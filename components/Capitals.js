import React from 'react';

import CapitalInfo from './CapitalInfo';

export default function Capitals() {

  return (
    <div className='capitals__list'>
      <ul>
        <CapitalInfo city='Recife' />
        <CapitalInfo city='João Pessoa' />
        <CapitalInfo city='Natal' />
        <CapitalInfo city='Fortaleza' />
      </ul>
    </div>
  );
}
