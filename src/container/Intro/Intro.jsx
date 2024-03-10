import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from  '../../constants';
import './Intro.css';
import { useRef } from 'react';

const Intro = () => { 
  
  const [playVideo, setPlayVideo] = useState(true)
  const VidRef = React.useRef();

  function handleVideo () {
    setPlayVideo((perState) => !perState)
    if (playVideo) {VidRef.current.pause();}
    else {VidRef.current.play();}}

  return (
    <div className='app__video'>
      <video src={meal} ref={VidRef}
      type="video/mp4"
      loop muted controls={false} autoPlay
      style={{width:'100%'}} />
      <div className="app__video-overlay flex__center">
        <div onClick={handleVideo} className="app__video-overlay-circle flex__center">
          {playVideo? 
          < BsPauseFill color='#fff' fontSize={30} />: 
          <BsFillPlayFill color='#fff' fontSize={30}  />}
        </div>
      </div>
    </div>
  )
};
export default Intro;