import React, { Component } from 'react';
import VideoPlayerLayout from './../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import {formatTime, isFullScreen, requestFullScreen, exitFullScreen} from '../../libs/utilities'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: '00:00',
    time: '00:00',
    durationFloat: 0,
    timeFloat: 0,
    progress: 0,
    loading: false,
    volume: .5,
    lastVolume: .5
  }
  
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: formatTime(this.video.duration),
      durationFloat: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      time: formatTime(this.video.currentTime),
      timeFloat: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }


  handleSeeking = event => {
    this.setState({
      loading: true,
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({
      volume: this.video.volume
    })
  }

  handleMuteToggle = event => {
    this.setState ({lastVolume: this.video.volume})
    this.video.volume = (this.video.volume !== 0) ? 0 : this.state.lastVolume
    this.setState ({ volume: this.video.volume })
  }

  handleFullScreenClick = event => {
    if(!isFullScreen()) {
      requestFullScreen(this.player)
    } else {
      exitFullScreen(this.player)
    }
  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
          <Title
            title={this.props.title}
          />
          <Controls>
            <PlayPause
              pause={this.state.pause}
              handleClick={this.togglePlay}/>
            <Timer
              duration={this.state.duration}
              time={this.state.time} />
            <ProgressBar 
              duration={this.state.durationFloat}
              value={this.state.timeFloat}
              handleProgressChange={this.handleProgressChange} />
            <Volume
              volume={this.state.volume}
              handleMuteToggle={this.handleMuteToggle}
              handleVolumeChange={this.handleVolumeChange} />
            <FullScreen
                handleFullScreenClick={this.handleFullScreenClick} />
          </Controls>
          <Spinner
            active={this.state.loading} />
          <Video
            pause={this.state.pause}
            autoPlay={this.props.autoPlay}
            src={this.props.src}
            handleLoadedMetadata={this.handleLoadedMetadata}
            handleTimeUpdate={this.handleTimeUpdate}
            handleSeeking={this.handleSeeking}
            handleSeeked={this.handleSeeked} />
      </VideoPlayerLayout>
    )
  }

}

export default VideoPlayer