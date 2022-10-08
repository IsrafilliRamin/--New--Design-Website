import React, { useState } from 'react'
import './HeroSection.css'
import Button from "../button/Button"
import "../../App.css"

const HeroSection = () => {


  const [changeVideo, setChangeVideo] = useState(false)
  const [changeVideo2, setChangeVideo2] = useState(false)


  return (
    <div className='hero-container'>
      {changeVideo ? <video src="/videos/video-1.mp4"
            autoPlay loop muted /> : <video src="/videos/video-2.mp4"
            autoPlay loop muted  />}
            {changeVideo2 && <video src="/videos/wars.mp4"
            autoPlay loop  />}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting fir?</p>
            <div className='hero-btns'>
                <Button className="btns"
                onClick={()=>setChangeVideo(!changeVideo)}
                buttonStyle="btn--outline"
                buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns"
                onClick={()=>setChangeVideo2(!changeVideo2)}
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>

            </div>
    </div>
  )
}

export default HeroSection