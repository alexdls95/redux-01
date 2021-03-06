import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import MuteIcon from '../../icons/components/mute'
import './volume.css'

function Volume(props) {
  return (
    <div className="Volume">
      <div onClick={props.handleMuteToggle}>
        {
          props.volume ?
            <VolumeIcon color="white" size={25} />
          :
            <MuteIcon color="white" size={25} />
        }
      </div>
      <div className="Volume-range">
        <input type="range" min={0} max={1} step={.1} onChange={props.handleVolumeChange} value={props.volume}/>
      </div>
    </div>
  )
}

export default Volume