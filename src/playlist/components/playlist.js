import React from 'react'
import Media from './media'
import './playlist.css'

function Playlist (props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((item)=> {
                    return <Media key={item.id} {...item} openModal={props.handleOpenModal}/>
                })
            }
        </div>
    )
}

export default Playlist;