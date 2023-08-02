import React from 'react';
import '../../App.css';
import './About.css';
import { Link } from 'react-router-dom';
import StrokeDesign from '../Stroke';
import PhotoSlider from './Slider';
import IMG17 from '../assets/img-17.jpg';
import IMG22 from '../assets/img-22.jpg';
import IMG23 from '../assets/img-23.jpg';
import IMG25 from '../assets/img25.jpg';
import IMG26 from '../assets/img26.jpg';
import IMG27 from '../assets/img27.jpg';
import IMG28 from '../assets/img28.jpg';
import SVGIMG from '../assets/svg1.jpg';

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
            <img src={IMG17} />
          </div>
        </div>


        <div className='ourchef'>
          <h2><StrokeDesign />Meet Our Chef's<StrokeDesign /></h2>
          <div className='chef'>
            <div className='chef-content'>
              <div className='chef-info'>
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


            <div className='chef-content'>
              <div className='chef-info'>
                <img src={IMG23} />
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
                <img src={IMG22} />
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
            
            <div className='strength-sec'>
            <div className='strengths-1'>
              <div className='back-img'>
                <img src={IMG25} />
              </div>
              <div className='over-box'>
                <img src={SVGIMG} />
                <h4>Hygienic Food</h4>
              </div>
            </div>
            <div className='strengths-2'>
              <div className='back-img'>
                <img src={IMG26} />
              </div>
              <div className='over-box'>
                <img src={SVGIMG} />
                <h4>Fresh Environment</h4>
              </div>
            </div>
            </div>


            <div className='strength-sec'>
            <div className='strengths-3'>
              <div className='back-img'>
                <img src={IMG27} />
              </div>
              <div className='over-box'>
                <img src={SVGIMG} />
                <h4>Skilled Chefs</h4>
              </div>
            </div>
            <div className='strengths-4'>
              <div className='back-img'>
                <img src={IMG28} />
              </div>
              <div className='over-box'>
                <img src={SVGIMG} />
                <h4>Event & Party</h4>
              </div>
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