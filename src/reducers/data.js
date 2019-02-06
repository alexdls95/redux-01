import schema from '../schemas/index'

const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
}

function data(state=initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = [];
      if (action.payload.query) {
        state.data.categories.map((category) => {
          return category.playlist.filter((item) => {
            return (item.author.toLowerCase().includes(action.payload.query.toLowerCase()) || item.title.toLowerCase().includes(action.payload.query.toLowerCase())) && results.push(item) 
          })
        })
        return {
          ...state,
          search: results
        }
      }
    }
    default: return state
  }
}

export default data