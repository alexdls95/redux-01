import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories';
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'

class Home extends Component {

  handleOpenModal = (id) => {
    this.props.actions.openModal(id)
  }

  handleCloseModal = (event) => {
    this.props.actions.closeModal()
  }

  render () {
    return (
      <HandleError>
        <HomeLayout>
          <RelatedLayout />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.props.modal.get('visible') &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer autoPlay id={this.props.modal.get('mediaId')}/>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props) {
  console.log(state)
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  let searchResults = list()
  const search = state.get('data').get('search').toLowerCase()
  if (search) {
    const mediaList = state.get('data').get('entities').get('medias')
    searchResults = mediaList.filter((item) => {
      return item.get('author').toLowerCase().includes(search) || item.get('title').includes(search)
    }).toList()
  }
  return {
    categories,
    search: searchResults,
    modal: state.get('modal'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)