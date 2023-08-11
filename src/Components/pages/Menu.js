import React from "react";
import './Menu.css';
import '../../App.css';
import Menuitem from "./Menuitem";
import StrokeDesign from "../Stroke";
import Footer from "../Footer";
import IMG6 from '../assets/img-6.webp';
import IMG8 from "../assets/img-8.webp";
import IMG9 from "../assets/img-9.webp";
import IMG10 from "../assets/img-10.webp";
import IMG12 from "../assets/img-12.webp";
import IMG18 from "../assets/img-18.webp";
import IMG19 from "../assets/img-19.jpg";
import IMG20 from "../assets/img-20.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import { SVGCustom } from 'svg-fill-custom';

function Menu() {
    useEffect(() =>{
        Aos.init({duration:2000});
          },[]);
    return (
        <><div className="container">
            <h1 className='menu' data-aos="flip-left" ><div className='designstroke'><StrokeDesign /></div>Explore Our Menu<div className='designstroke'><StrokeDesign /></div></h1>
            <div className="menu-container">
                <div className="menu-content" data-aos="fade-up-right">
                    {/* <SVGCustom src={<TestSvg />} fill={'red'} width={'200px'} /> */}
                    <h2>Fusion Sushi</h2>
                    <div className="menu-items">
                        <Menuitem
                            text1='Sushi Deluxe'
                            text2='10 pieces of assorted sushi & Tuna roll'
                            price='$30'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1=' Chirashi'
                            text2="Chef's special choice of Sashimi & sushi rice "
                            price='$25'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1=' Unagi don'
                            text2='Eel over Sushi Rice'
                            price='$40'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1='Salmon lover'
                            text2='Sushi & salmon avocado roll'
                            price='$35'
                        />
                    </div>
                </div> 
                <div className="menu-img" data-aos="fade-up-left">
                    <img src={IMG6}></img>
                </div>

            </div>


            <div className="menu-container" data-aos="fade-up">
                <div className="menu-img"  data-aos="fade-down-right"
>
                    <img src={IMG8} />
                </div>
                <div className="menu-content" data-aos="fade-down-left">
                    <h2 >Sushi Rolls</h2>

                    <div className="menu-items">
                        <Menuitem
                            text1='Crispy Cheese Roll'
                            text2='Crab meat, cucumber,cheese and tanuki sushi rolls'
                            price='$35'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1='Spicy Maguro Roll'
                            text2='Spicy tuna roll topped with fresh tuna'
                            price='$20'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1='Peppered Tuna Sashimi'
                            text2='Slices of peppered tuna with ponzu sauce'
                            price='#40'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1='Seared Crab Roll'
                            text2='Tuna & Avocado topped with crab meat salad'
                            price='#25'
                        />
                    </div>
                </div>

            </div>

            <div className="menu-container" data-aos="fade-up">

                <div className="menu-content"  data-aos="fade-up-right">
                    <h2>Appetizers</h2>

                    <div className="menu-items">
                        <Menuitem
                            text1='Sahimi Starter'
                            text2='3kind Sashimi, 2 pieces each'
                            price='$25'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Soft Shell Crab'
                            text2='Soft shell crab tempura,lightly fried'
                            price='$30'
                        /><hr className="lines"></hr>
                        <Menuitem
                            text1='Fuji Roll'
                            text2='Salmon, crab stick and tamago'
                            price='$20'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Tuna & Octopus Salad'
                            text2='tuna, octopus, asparagus & masago'
                            price='$25'
                        />
                    </div>
                </div>
                <div className="menu-img" data-aos="fade-up-left">
                    <img src={IMG10}></img>
                </div>

            </div>

            <div className="menu-container" data-aos="fade-up">
                <div className="menu-img" data-aos="fade-down-right">
                    <img src={IMG9}></img>
                </div>
                <div className="menu-content" data-aos="fade-down-left">
                    <h2>Udon</h2>

                    <div className="menu-items">
                        <Menuitem
                            text1='Kitsune Udon'
                            text2='Udon is most famous noodles in japan'
                            price='$30'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Niku Udon'
                            text2='Udon is most famous noodles in japan'
                            price='#25'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Chiken Katsu Curry Udon'
                            text2='Udon is most famous noodles in japan'
                            price='$40'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Tori Baitan Udon'
                            text2='Udon is most famous noodles in japan'
                            price='¥$35'
                        />
                    </div>
                </div>

            </div>

            <div className="menu-container" data-aos="fade-up">
                <div className="menu-content" data-aos="fade-up-right" >
                    <h2>Desserts</h2>
                    <div className="menu-items" >
                        <Menuitem
                            text1='Raspberry Ginger Cheesecake'
                            text2='Japanese style topped with fudge and raspberry'
                            price='$15'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Ice Cream'
                            text2='Red bean, green tea, chocolate & Vanilla'
                            price='$10'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Tempura Cheesecake'
                            text2='Tempura fried New York style Cheesecake'
                            price='$20'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Tempura Banana'
                            text2='Tempura fried Banana'
                            price='$10'
                        />
                    </div>
                </div>
                <div className="menu-img" data-aos="fade-up-left">
                    <img src={IMG12}></img>
                </div>
            </div>

            <div className="menu-container" data-aos="fade-up">
                <div className="menu-img" data-aos="fade-down-right" >
                    <img src={IMG18}></img>
                </div>
                <div className="menu-content" data-aos="fade-down-left">
                    <h2>Cocktails</h2>
                    <div className="menu-items">
                        <Menuitem
                            text1='Cassis Liqueur & Orange'
                            text2='Famous Japanese inspired Cocktails'
                            price='$10'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Shandy Gaff'
                            text2='Japanese inspired Cocktails'
                            price='$15'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Peach Liqueur & Soda'
                            text2='Japanese inspired Cocktails'
                            price='¥500'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Moscow Mule'
                            text2='Japanese inspired Cocktails'
                            price='$10'
                        />
                        <hr className="lines"></hr>
                        <Menuitem
                            text1='Fuzzey Navel'
                            text2='Japanese inspired Cocktails'
                            price='#20'
                        />
                    </div>
                </div>
</div>
                <div className="menu-container" data-aos="fade-up">


                    <div className="menu-content" data-aos="fade-up-right">
                        <h2>Beer</h2>
                        <div className="menu-items">
                            <Menuitem
                                text1='Sapporo Premium'
                                text2='Famous Japanese Style Beer'
                                price='$20'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Asahi Super Dry'
                                text2='Famous Japanese Style Beer'
                                price='$30'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Bud Light'
                                text2='Famous Japanese Style Beer'
                                price='$20'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Heineken'
                                text2='Famous Japanese Style Beer'
                                price='$30'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Corona'
                                text2='Famous Japanese Style Beer'
                                price='$20'
                            />
                        </div>
                    </div>
                    <div className="menu-img" data-aos="fade-up-left">
                        <img src={IMG19}></img>
                    </div>
                    </div>

                <div className="menu-container" data-aos="fade-up">

                    <div className="menu-img" data-aos="fade-down-right">
                        <img src={IMG20}></img>
                    </div>
                    <div className="menu-content" data-aos="fade-down-left">
                        <h2>Sake</h2>
                        <div className="menu-items">
                            <Menuitem
                                text1='Koshino Kagetora'
                                text2='Popular Japanese Alcoholic drinks'
                                price='#25'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Kagatobi'
                                text2='Popular Japanese Alcoholic drinks'
                                price='#10'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Kasen Goukai'
                                text2='Popular Japanese Alcoholic drinks'
                                price='$20'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Shirakabegura'
                                text2='Popular Japanese Alcoholic drinks'
                                price='#15'
                            />
                            <hr className="lines"></hr>
                            <Menuitem
                                text1='Shimeharitsuru'
                                text2='Popular Japanese Alcoholic drinks'
                                price='$30'
                            />
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
            
        

        </>
    );
}


export default Menu;