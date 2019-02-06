import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'
import data from '../schemas/index'

console.log(data)


// descomponemos la data en un nuevo objeto de un único atributo también llamado data.
const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
  },
  search: []
}

const store = createStore (
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // este enhancer sirve para debug desde el navegador.
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>, homeContainer)