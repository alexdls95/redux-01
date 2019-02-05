import { createStore } from 'redux'

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title, // idem a {"title": title}
    }
  })
}

const initialState = [
  {
    "title": "Zitarrosa",
  },
  {
    "title": "One more time",
  },
  {
    "title": "Creep"
  }
]

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById("playlist")
const playlist = store.getState()
playlist.forEach((item) => {
  const template = document.createElement('p')
  template.textContent = item.title
  $container.appendChild(template)
})