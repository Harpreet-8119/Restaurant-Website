import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css'; 
import './Slider.css';
import { AiFillStar } from "react-icons/ai";
import IMGBG from '../assets/bg-img.jpg'
import PRO1 from '../assets/profile1.jpg'
import PRO2 from '../assets/profile2.jpg'
import PRO3 from '../assets/profile3.jpg'



const PhotoSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 724,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    return (
      <Slider {...settings}>
        <div  className='slider-container'>
        <img src={IMGBG} alt="Image 4" />
        <div className='review-content'>
            <div className='profile'>
              <ul className='text-1'>
                <li><img src={PRO1}/></li>
              </ul>
              <ul className='text-2'>
                <li><h2>Niyuki</h2></li>
                <li>Nagoya</li>
              </ul>
            </div>
            <div className='comment'>
            <p> Hygienic food & fresh environment, everyone had a wonderful delight experience. 
              It was FABULOUS! great experience at The Sushi Restaurant.</p>
              <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          </div>      
        </div>
        </div>


        <div  className='slider-container'>
        <img src={IMGBG} alt="Image 4" />
        <div className='review-content'>
            <div className='profile'>
              <ul className='text-1'>
                <li><img src={PRO3}/></li>
              </ul>
              <ul className='text-2'>
              <li><h2>Matsumoto</h2></li>
                <li>Ichinomiya</li>
              </ul>
            </div>
            <div className='comment'>
            <p> Special treat to dine, It was a wow experience food was really delicious! 
          outstanding dinner made by Master chef, food experience was unforgettable!</p>
              <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          </div>
          </div>          
          </div>          

        <div className='slider-container'>
        <img src={IMGBG} alt="Image 4" />
        <div className='review-content'>
            <div className='profile'>
              <ul className='text-1'>
                <li><img src={PRO2}/></li>
              </ul>
              <ul className='text-2'>
              <li><h2>Yuika</h2></li>
                <li>Toyota</li>
              </ul>
            </div>
            <div className='comment'>
            <p>The taste of food was really amazing, Wow! outstanding dinner 
          made by Master chef of Restaurant, I never forget this delicious food experience.</p>
              <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          </div>
          </div>        
        </div>

        <div  className='slider-container'>
        <img src={IMGBG} alt="Image 4" />
        <div className='review-content'>
            <div className='profile'>
              <ul className='text-1'>
                <li><img src={PRO1}/></li>
              </ul>
              <ul className='text-2'>
                <li><h2>Niyuki</h2></li>
                <li>Nagoya</li>
              </ul>
            </div>
            <div className='comment'>
            <p> Hygienic food & fresh environment, everyone had a wonderful delight experience. 
              It was FABULOUS! great experience at The Sushi Restaurant.</p>
              <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          </div>      
        </div>
        </div>

        <div  className='slider-container'>
        <img src={IMGBG} alt="Image 4" />
        <div className='review-content'>
            <div className='profile'>
              <ul className='text-1'>
                <li><img src={PRO3}/></li>
              </ul>
              <ul className='text-2'>
                <li><h2>Matsumoto</h2></li>
                <li>Ichinomiya</li>
              </ul>
            </div>
            <div className='comment'>
            <p> Special treat to dine, It was a wow experience food was really delicious! 
          outstanding dinner made by Master chef, food experience was unforgettable!</p>
              <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          </div>
          </div>          
          </div>    
          <div className='slider-container'>
        <img src={IMGBG} alt="Image 4" />
        <div className='review-content'>
            <div className='profile'>
              <ul className='text-1'>
                <li><img src={PRO2}/></li>
              </ul>
              <ul className='text-2'>
                <li><h2>Yuika</h2></li>
                <li>Toyota</li>
              </ul>
            </div>
            <div className='comment'>
            <p>The taste of food was really amazing, Wow! outstanding dinner 
          made by Master chef of Restaurant, I never forget this delicious food experience.</p>
              <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
          </div>
          </div>        
        </div>
      </Slider>
    );
  };


export default PhotoSlider;