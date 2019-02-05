import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../../src/api.json'
import { createStore } from 'redux'

// descomponemos la data en un nuevo objeto de un único atributo también llamado data.
const initialState = {
  data: {...data}
}

const store = createStore (
  (state)=>state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // este enhancer sirve para debug desde el navegador.
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')

render(<Home data={data}/>, homeContainer)