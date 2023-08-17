import React from 'react';
import '../App.css';
import './homeabout.css';
import IMG13 from './assets/img-13.webp';
import StrokeDesign from './Stroke';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Homeabout() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className='homeabout'>
                <div className='homeabout__container'>
                    <div className='homeabout__content'>
                        <h3 data-aos="zoom-in"  >Restaurant Life</h3>
                        <h2 data-aos="flip-left" >Meet our Chef</h2>
                        <span ><p data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">Lorem ipsum dolor sit amet, consecte turmi neads en se se
                            adipisicing elit, sed do eiusm od tempor ens inc a didunt ut labore et dolo re magna aliqua.
                            Ut enim ad minim veniav, quis nostrud exerci se reprehenderit nvolup.</p></span>
                        <p data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">Aperiam, eaque ipsa quae ab illo inventorm dom se ns verit atis et quasi architecto
                            beat ae vitae dicta sunt expli cabo. Nem odit aut fugit, sed quia consequun tur magni
                            dolors.
                            res eos Neque porro quisquam and en expli cabo. Nem odit aut fugit, sedquiac onsequ.</p>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className='chefbtn'><button><Link to='/about-us'>Explore More</Link></button></div>
                    </div>
                    <div className='chef__img' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <img src={IMG13} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Homeabout;