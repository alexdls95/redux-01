import React from 'react'
import MediaContainer from '../containers/media'
import './playlist.css'

function Playlist (props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((mediaId)=> {
                    return <MediaContainer key={mediaId} id={mediaId} openModal={props.handleOpenModal}/>
                })
            }
        </div>
    )
}

export default Playlist;