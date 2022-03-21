import React from 'react'
import videoBg from '../assets/videoBg.mp4';

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} 
               autoPlay 
               loop 
               muted></video>
        <div className="content">
            <h1>Hello everyone,</h1>
            <p>Welcome to my webpage.</p>
        </div>
    </div>
  )
}

export default Main