import React from 'react';

import SearchForm from './components/searchForm';

function Main () {

  // State properties
  const [city, setCity] = React.useState('');

  // function: Handle changes from input
  function handleChange(event) {
    event.preventDefault();   // Not reloading
    // get name & value of event
    const {name, value} = event.target;

    // Changes `city` state if event name was `city`
    if (name === 'city') setCity(value);
  }

  return (
    <div>
      <SearchForm city={city} handleChange={handleChange}/>
    </div>
  );
}

export default Main;