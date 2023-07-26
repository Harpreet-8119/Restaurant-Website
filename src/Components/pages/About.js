import React from 'react';
import '../../App.css';
import './About.css';
import { Link } from 'react-router-dom';
import StrokeDesign from '../Stroke';
import { AiFillStar } from "react-icons/ai";
import PhotoSlider from './Slider';

import 'swiper/css';
function AboutUs() {
  return (
    <>
      <div className='about__container'>
        <div className='aboutus'>
          <div className='content'>
            <h2><StrokeDesign />About Us<StrokeDesign /></h2>
            <p>Lorem ipsum dolor sit amet, consecte turmi neads en se se adipisicing elit,
              sed do eiusm od tempor ens inc a didunt ut labore et dolo re magna aliqua.
              Ut enim ad minim veniav, quis nostrud exerci se reprehenderit nvolup.
            </p>
            <p> Aperiam, eaque ipsa quae ab illo inventorm dom se ns verit atis et
              quasi architecto beat ae vitae dicta sunt expli cabo. Nem odit aut fugit,
              sed quia consequun tur magni dolors. res eos Neque porro quisquam and en expli
              cabo. Nem odit aut fugit, sedquiac onsequ.</p>
          </div>
          <div className='image'>
            <img src='assets/img-17.jpg' />
          </div>
        </div>


        <div className='ourchef'>
          <h2><StrokeDesign />Meet Our Chef's<StrokeDesign /></h2>
          <div className='chef'>
            <div className='chef-content'>
              <div className='chef-info'>
                <img src="assets/img-22.jpg" />
                <div className='chef-links'>
                  <ul>
                    <li><a href='https://www.facebook.com/'> <i className='fab fa-facebook'></i>Facebook</a></li>
                    <li><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i>Instagram</a></li>
                    <li><a href='https://www.twitter.com/'><i className='fab fa-twitter'></i>Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='chef-content'>
              <div className='chef-info'>
                <img src="assets/img-23.jpg" />
                <div className='chef-links'>
                  <ul>
                    <li><a href='https://www.facebook.com/'> <i className='fab fa-facebook'></i>Facebook</a></li>
                    <li><a href='https://www.instagram.com/'><i className='fab fa-instagram'></i>Instagram</a></li>
                    <li><a href='https://www.twitter.com/'><i className='fab fa-twitter'></i>Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='chef-content'>
              <div className='chef-info'>
                <img src="assets/img-22.jpg" />
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


        <div className='about-us'>
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
          <h2><StrokeDesign />Why Choose Us<StrokeDesign /></h2>
          <div className='strength-container'>
            <div className='strengths'>
              <div className='back-img'>
                <img src='assets/img25.jpg' />
              </div>
              <div className='over-box'>
                <img src='' />
                <h4>Hygienic Food</h4>
              </div>
            </div>
            <div className='strengths'>
              <div className='back-img'>
                <img src='assets/img26.jpg' />
              </div>
              <div className='over-box'>
                <img src='' />
                <h4>Fresh Environment</h4>
              </div>
            </div>
            <div className='strengths'>
              <div className='back-img'>
                <img src='assets/img27.jpg' />
              </div>
              <div className='over-box'>
                <img src='assets/svg1.svg' />
                <h4>Skilled Chefs</h4>
              </div>
            </div>
            <div className='strengths'>
              <div className='back-img'>
                <img src='assets/img28.jpg' />
              </div>
              <div className='over-box'>
                <img src='' />
                <h4>Event & Party</h4>
              </div>
            </div>
          </div>

        </div>
        <div className='reviews'>
          <h2><StrokeDesign />Our Reviews<StrokeDesign /></h2>
          <div className='slider'>
            <PhotoSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;