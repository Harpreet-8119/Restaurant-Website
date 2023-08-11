import React from 'react';
import './Menustrength.css';
import 'animate.css';
import {IoFastFood} from 'react-icons/io5';
import {BiSolidParty} from 'react-icons/bi';
import {GiChefToque} from 'react-icons/gi';
import {MdFoodBank} from 'react-icons/md';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StrokeDesign from './Stroke';

function MenuStrength() {
    useEffect(() =>{
        Aos.init({duration:2000});
          },[]);
    return (
        <>
            <div className='menustrength'>
                <p data-aos="zoom-in">Why Choose Us</p>
                <h2 data-aos="flip-left"><div className='designstroke'><StrokeDesign /></div>Our Strength<div className='designstroke'><StrokeDesign /></div></h2>
                <div className='strength-container'>
                <div className='strength-container1'>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon' data-aos="flip-up"><IoFastFood/></div></li>
                            <li><h2>Hygienic Food</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon' data-aos="flip-up"><MdFoodBank/></div></li>
                            <li><h2>Fresh Environment</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                    </div>
                    <div className='strength-container1'>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon' data-aos="flip-up"><GiChefToque/></div></li>
                            <li><h2>Skilled Chefs</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon' data-aos="flip-up"><BiSolidParty/></div></li>
                            <li><h2>Event & Party</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default MenuStrength