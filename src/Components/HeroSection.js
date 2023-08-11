import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { useEffect } from 'react';

function HeroSection() {
  useEffect(() =>{
Aos.init({duration:2000});
  },[]);
  return (
    <div className='hero-section'>
    <div className='hero-container'>
      
            <h1 data-aos="flip-left" className='heading'>Sushi Restaurant</h1>
            <p data-aos="fade-up" className='heading' >JAPANESE CUISINE & ONLINE DELIVERY</p>
            <div  data-aos="fade-up" className='hero-btns heading'>
              <Button 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                MAKE A RESERVATION
              </Button>
            </div>   
          
      {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}

    </div>
    </div>
  )
}

export default HeroSection;

