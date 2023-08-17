import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { useEffect } from 'react';

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='hero-section'>
      <div className='hero-container'>
        {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}
      </div>
      <div className='hero-content'>
        <h1  className='heading'>Sushi Restaurant</h1>
        <p  className='heading' >JAPANESE CUISINE & ONLINE DELIVERY</p>
        <div  className='hero-btns heading'>
          <Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            MAKE A RESERVATION
          </Button>
        </div>
      </div>
      <hr></hr>
      <div className='hero-para'>
        <h4 data-aos="zoom-in">Come with family & feel the joy of mouthwatering food.</h4>
      </div>

    </div>
  )
}

export default HeroSection;

