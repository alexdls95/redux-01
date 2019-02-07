import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id
      }
    })
  }
  render() {
    return (
      <Media openModal={this.openModal} { ...this.props.media.toJS()}/>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    media: state.get('data').get('entities').get('medias').get(props.id)
  }
}


export default connect(mapStateToProps)(MediaContainer)