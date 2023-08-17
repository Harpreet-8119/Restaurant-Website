import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StrokeDesign from './Stroke';
import '../App.css';
import './Homecards.css';
import IMGBG1 from './assets/IMGS2.jpg';
import IMGBG2 from './assets/IMGS1.jpg';
import IMGBG3 from './assets/IMGS3.jpg';
import IMGBG4 from './assets/IMGS4.jpg';
import IMGBG5 from './assets/IMGS5.jpg';
import IMGBG6 from './assets/IMGS6.jpg';
import IMGBG7 from './assets/IMGS7.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Homecards = () => {
    useEffect(() =>{
        Aos.init({duration:2000});
          },[]);
    const settings = {
        dots:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
        <div className='Main-slidercontainer'>      
        <div className='homeslider'>
        <p data-aos="zoom-in">Speacial Item</p>
            <h2 data-aos="flip-left"><div className='designstroke'><StrokeDesign /></div>Popular Food Item<div className='designstroke'><StrokeDesign /></div></h2>
        <Slider {...settings}>
            <div className='slider-img'>
                <img src={IMGBG1} alt="Image 1" />
            </div>
            
            <div className='slider-img'>
                <img src={IMGBG2} alt="Image 2" />
            </div>
            <div className='slider-img'>
                <img src={IMGBG3} alt="Image 3" />
            </div>

            <div className='slider-img'>
                <img src={IMGBG4} alt="Image 4" />
            </div>

            <div className='slider-img'>
                <img src={IMGBG6} alt="Image 5" />
            </div>
            <div className='slider-img'>
                <img src={IMGBG5} alt="Image 6" />
            </div>
            <div className='slider-img'>
                <img src={IMGBG7} alt="Image 7" />
            </div>
        </Slider>
        </div>
        </div>
        
   </>
    );
};


export default Homecards;