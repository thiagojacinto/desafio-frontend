import React from 'react';

export default function SearchForm(props) {

  // function: handleSubmit to deal with submit button action
  function handleSubmit(event) {
    event.preventDefault();

    alert('Searching...'); // placeholder

  }

  return (
    <div className="search__input">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          <input 
            type = 'text'
            name = 'city'
            value = {props.city}
            placeholder = 'Insira aqui o nome da cidade'
            onChange = {(event) => props.handleChange(event)}
          />
        </label>
        <button>Procurar</button>
      </form>
    </div>
  );
}