import React from 'react';
import './Homemenu.css';
import StrokeDesign from './Stroke';
import IMGM2 from './assets/IMGM2.jpg';
import IMGM1 from './assets/img02.webp';
import IMGM3 from './assets/IMGM3.jpg';
import IMGM4 from './assets/IMGM4.jpg';
import IMGM5 from './assets/IMGM5.jpg';
import IMGM6 from './assets/IMGM6.jpg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Homemenu() {
    useEffect(() =>{
        Aos.init({duration:2000});
          },[]);
    return (
        <>
            <div className='Hmenu-container'>
                <p data-aos="zoom-in">Special Selection</p>
                <h2 data-aos="flip-left"><div className='designstroke'><StrokeDesign /></div>Our Menu<div className='designstroke'><StrokeDesign /></div></h2>
                <div className='Hmenu'>
                    <div data-aos="flip-left" className='menu-heading'>
                        <ul>
                            <li><a href='/menu'>MORNING</a></li>
                            <li><a href='/menu'>LUNCH</a></li>
                            <li><a href='/menu'>DINNER</a></li>
                            <li><a href='/menu'>DRINKS</a></li>
                        </ul>
                    </div>
                    <div className='Menu-item'>
                        <div  data-aos="fade-right" className='Menu-item-left'>
                            <div className='Hmenu-items'>
                                <div className='Hmenu-left'>
                                    <img src={IMGM2} />
                                </div>
                                <div className='Hmenu-right'>
                                    <div className='Item-title'>
                                        <ul>
                                            <li>Crispy Cheese Roll</li>
                                            <li className='line'></li>
                                            <li>$20.00</li>
                                        </ul>
                                    </div>
                                    <div className='Item-info'>
                                        <p>Crab meat, cucumber, mushroom, cream cheese and tanuki sushi rolls. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='Hmenu-items'>
                                <div className='Hmenu-left'>
                                    <img src={IMGM6} />
                                </div>
                                <div className='Hmenu-right'>
                                    <div className='Item-title'>
                                        <ul>
                                            <li>Spicy Maguro Roll</li>
                                            <li></li>
                                            <li>$40.00</li>
                                        </ul>
                                    </div>
                                    <div className='Item-info'>
                                        <p>Rice, nori, cream cheese, cucumber, panko flakes, tuna fish, ginger.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Hmenu-items'>
                                <div className='Hmenu-left'>
                                    <img src={IMGM4} />
                                </div>
                                <div className='Hmenu-right'>
                                    <div className='Item-title'>
                                        <ul>
                                            <li>Seared Crab Roll</li>
                                            <li></li>
                                            <li>$20.00</li>
                                        </ul>
                                    </div>
                                    <div className='Item-info'>
                                        <p>Fresh picked crab meat tossed with mayo, lemon, celery, chives and Old Bay seasoning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
<hr></hr>
                        <div  data-aos="fade-left" 
                        className='Menu-item-right'>
                            <div className='Hmenu-items'>
                                <div className='Hmenu-left'>
                                    <img src={IMGM1} />
                                </div>
                                <div className='Hmenu-right'>
                                    <div className='Item-title'>
                                        <ul>
                                            <li>Tori Baiton Udon</li>
                                            <li></li>
                                            <li>$20.00</li>
                                        </ul>
                                    </div>
                                    <div className='Item-info'>
                                        <p>chiken balls,mushroom,savory-sweet sauce with spring onion ,fried garlic. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='Hmenu-items'>
                                <div className='Hmenu-left'>
                                    <img src={IMGM5} />
                                </div>
                                <div className='Hmenu-right'>
                                    <div className='Item-title'>
                                        <ul>
                                            <li>Niku Udon</li>
                                            <li></li>
                                            <li>$20.00</li>
                                        </ul>
                                    </div>
                                    <div className='Item-info'>
                                        <p>Topping with beef that's been simmered
                                            in a savory-sweet sauce with onions or scallions. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='Hmenu-items'>
                                <div className='Hmenu-left'>
                                    <img src={IMGM3} />
                                </div>
                                <div className='Hmenu-right'>
                                    <div className='Item-title'>
                                        <ul>
                                            <li>Unagi Don</li>
                                            <li></li>
                                            <li>$40.00</li>
                                        </ul>
                                    </div>
                                    <div className='Item-info'>
                                        <p>Grilled eel brushed with a tare sauce, served atop freshly steamed rice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='view-btn' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                    <button className="view-menu">View the full Menu</button>
                </div>
            </div>



        </>
    )
}
export default Homemenu