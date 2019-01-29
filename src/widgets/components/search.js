import React from 'react'
import './search.css'

const Search = (props) => (
  <div style={{textAlign: 'center'}}>
    <form className="Search" onSubmit={props.handleSubmit}>
      <input
      type="text"
      className="Search-input"
      placeholder="Buscar artículos..."
      ref={props.setRef}
      onChange={props.handleChange}
      value={props.value}
      />
    </form>
  </div>
)

export default Search