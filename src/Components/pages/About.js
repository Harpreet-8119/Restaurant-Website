import React from 'react';
import '../../App.css';
import './About.css';
import { Link } from 'react-router-dom';
import StrokeDesign from '../Stroke';
import PhotoSlider from './Slider';
import Footer from "../Footer";
import {IoFastFood} from 'react-icons/io5';
import {BiSolidParty} from 'react-icons/bi';
import {GiChefToque} from 'react-icons/gi';
import {MdFoodBank} from 'react-icons/md';
import IMG17 from '../assets/img-17.webp';
import IMG21 from '../assets/chef2.jpg';
import IMG22 from '../assets/img-22.webp';
import IMG23 from '../assets/img-23.webp';
import IMG25 from '../assets/img25.webp';
import IMG26 from '../assets/img26.webp';
import IMG27 from '../assets/img27.webp';
import IMG28 from '../assets/img28.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import 'swiper/css';
import { icons } from 'react-icons';
function AboutUs() {
  useEffect(() =>{
    Aos.init({duration:2000});
      },[]);
  return (
    <>
      <div className='about__container' >
        <div className='aboutus' data-aos="fade-up">
          <div className='content'>
            <h2 data-aos="flip-left" ><div className='designstroke'><StrokeDesign /></div>About Us<div className='designstroke'><StrokeDesign /></div></h2>
            <p className='chef__img'  data-aos="zoom-in-right">Lorem ipsum dolor sit amet, consecte turmi neads en se se adipisicing elit,
              sed do eiusm od tempor ens inc a didunt ut labore et dolo re magna aliqua.
              Ut enim ad minim veniav, quis nostrud exerci se reprehenderit nvolup.
            </p>
            <p className='chef__img'  data-aos="zoom-in-right" > Aperiam, eaque ipsa quae ab illo inventorm dom se ns verit atis et
              quasi architecto beat ae vitae dicta sunt expli cabo. Nem odit aut fugit,
              sed quia consequun tur magni dolors. res eos Neque porro quisquam and en expli
              cabo. Nem odit aut fugit, sedquiac onsequ.</p>
          </div>
          <div className='image chef__img'  data-aos="zoom-in-left"
     data-aos-anchor-placement="top-bottom">
            <img src={IMG17} />
          </div>
        </div>


        <div className='ourchef'>
          <h2 data-aos="flip-left" ><div className='designstroke'><StrokeDesign /></div>Meet Our Chef's<div className='designstroke'><StrokeDesign /></div></h2>
          <div className='chef'>
            <div className='chef-content' data-aos="fade-up-right"
     data-aos-duration="3000">
              <div className='chef-info' >
                <img src={IMG22}/>
                <div className='chef-links'>
                  <ul>
                    <li><a href='https://www.facebook.com/'> <i className='fab fa-facebook'></i>Facebook</a></li>
                    <li><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i>Instagram</a></li>
                    <li><a href='https://www.twitter.com/'><i className='fab fa-twitter'></i>Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='chef-content' data-aos="fade-up"
     data-aos-duration="3000">
              <div className='chef-info'>
                <img src={IMG21} />
                <div className='chef-links'>
                  <ul>
                    <li><a href='https://www.facebook.com/'> <i className='fab fa-facebook'></i>Facebook</a></li>
                    <li><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i>Instagram</a></li>
                    <li><a href='https://www.twitter.com/'><i className='fab fa-twitter'></i>Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='chef-content' data-aos="fade-up-left"
     data-aos-duration="3000">
              <div className='chef-info'>
                <img src={IMG23} />
                <div className='chef-links'>
                  <ul>
                    <li><a href='https://www.facebook.com/'><i className='fab fa-facebook'></i>Facebook</a></li>
                    <li><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i>Instagram</a></li>
                    <li><a href='https://www.twitter.com/'><i className='fab fa-twitter'></i>Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='about-us' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div className='about-order'>
            <ul>
              <li><h2>150+</h2></li>
              <li><p>DAILY ORDER</p></li>
            </ul>
          </div>
          <div className='about-dishes'>
            <ul>
              <li><h2>20+</h2></li>
              <li><p>SPECIAL DISHES</p></li>
            </ul>
          </div>


          <div className='about-experience'>
            <ul>
              <li><h2>15+</h2></li>
              <li><p>YEARS OF EXPERIENCE</p></li>
            </ul>
          </div>
          <div className='about-expert'>
            <ul>
              <li><h2>15+</h2></li>
              <li><p>EXPERT CHEF</p></li>
            </ul>
          </div>
        </div>

        <div className='strength'>
          <h2 data-aos="flip-left"><div className='designstroke'><StrokeDesign /></div>Why Choose Us<div className='designstroke'><StrokeDesign /></div></h2>
          <div className='strength-container'>
          
            <div className='strength-sec' >
            <div className='strengths-1'data-aos="zoom-in-down" >
              <div className='back-img'>
                <img src={IMG25} />
              </div>
              <div className='over-box' >
              <div className='icon'><IoFastFood/></div>
                <h4>Hygienic Food</h4>
              </div>
            </div>
            <div className='strengths-2' data-aos="zoom-in-down">
              <div className='back-img'>
                <img src={IMG26} />
              </div>
              <div className='over-box'>
              <div className='icon'><MdFoodBank/></div>
                <h4>Fresh Environment</h4>
              </div>
            </div>
            </div>


            <div className='strength-sec'>
            <div className='strengths-3' data-aos="zoom-in-down">
              <div className='back-img'>
                <img src={IMG27} />
              </div>
              <div className='over-box'>
              <div className='icon'><GiChefToque/></div>
                <h4>Skilled Chefs</h4>
              </div>
            </div>
            <div className='strengths-4' data-aos="zoom-in-down">
              <div className='back-img'>
                <img src={IMG28} />
              </div>
              <div className='over-box'>
              <div className='icon'><BiSolidParty/></div>
                <h4>Event & Party</h4>
              </div>
            </div>
            </div>


          </div>
        </div>


        <div className='reviews' >
          <h2 data-aos="flip-left"><div className='designstroke'><StrokeDesign /></div>Our Reviews<div className='designstroke'><StrokeDesign /></div></h2>
          <div className='slider' data-aos="zoom-in">
            <PhotoSlider />
          </div>


        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs;