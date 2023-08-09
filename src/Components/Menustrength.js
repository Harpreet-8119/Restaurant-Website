import React from 'react';
import './Menustrength.css';
import 'animate.css';
import {IoFastFood} from 'react-icons/io5';
import {BiSolidParty} from 'react-icons/bi';
import {GiChefToque} from 'react-icons/gi';
import {MdFoodBank} from 'react-icons/md';

function MenuStrength() {
    return (
        <>
            <div className='menustrength'>
                <p>Why Choose Us</p>
                <h2>Our Strength</h2>
                <div className='strength-container'>
                <div className='strength-container1'>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon'><IoFastFood/></div></li>
                            <li><h2>Hygienic Food</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon'><MdFoodBank/></div></li>
                            <li><h2>Fresh Environment</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                    </div>
                    <div className='strength-container1'>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon'><GiChefToque/></div></li>
                            <li><h2>Skilled Chefs</h2></li>
                            <li><p>Lorem Ipsum is simply dummy printing and typesetting.</p></li>
                        </ul>
                    </div>
                    <div className='container-section'>
                        <ul>
                            <li><div className='icon'><BiSolidParty/></div></li>
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