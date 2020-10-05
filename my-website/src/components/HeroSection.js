import React from 'react'
// import Button from './Button.js'
import './HeroSection.css'
import '../App.css';
import Button from './Button';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>Whatnare your waiting for?</p>
            <div className="hero-btns">
                <Button className = "btns"
                buttonStyle="btn--outline"
                buttonSize1="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
