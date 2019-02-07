import { fromJS } from 'immutable'

const initialState = fromJS({
    visible: false,
    mediaId: null,
})


function modal (state=initialState, action) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return state.merge({
        'visible': true,
        'mediaId': action.payload.mediaId
      })
    case 'CLOSE_MODAL':
      return state.set('visible', false)
    default:
      return state
  }
}

export default modal