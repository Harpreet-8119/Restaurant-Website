import React from "react";
import './Menu.css';
import '../../App.css';
import Menuitem from "./Menuitem";
import Footer from "../Footer";
import IMG6 from '../assets/img-6.webp';
import IMG8 from "../assets/img-8.webp";
import IMG9 from "../assets/img-9.webp";
import IMG10 from "../assets/img-10.webp";
import IMG12 from "../assets/img-12.webp";
import IMG18 from "../assets/img-18.webp";
import IMG19 from "../assets/img-19.jpg";
import IMG20 from "../assets/img-20.jpg";
// import { SVGCustom } from 'svg-fill-custom';

function Menu() {
    return (
        <><div className="container">
            <h1 className='menu' >Explore Our Menu</h1>
            <div className="menu-container">
                <div className="menu-content">
                    {/* <SVGCustom src={<TestSvg />} fill={'red'} width={'200px'} /> */}
                    <h2>Fusion Sushi</h2>
                    <div className="menu-items">
                        <Menuitem
                            text1='Sushi Deluxe'
                            text2='10 pieces of assorted sushi & Tuna roll'
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1=' Chirashi'
                            text2="Chef's special choice of Sashimi & sushi rice "
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1=' Unagi don'
                            text2='Eel over Sushi Rice'
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1='Salmon lover'
                            text2='Sushi & salmon avocado roll'
                            price='¥１５００'
                        />
                    </div>
                </div> <div className="menu-img">
                    <img src={IMG6}></img>
                </div>

            </div>


            <div className="menu-container">
                <div className="menu-img">
                    <img src={IMG8} />
                </div>
                <div className="menu-content">
                    <h2>Sushi Rolls</h2>

                    <div className="menu-items">
                        <Menuitem
                            text1='Crispy Cheese Roll'
                            text2='Crab meat, cucumber,cheese and tanuki sushi rolls'
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1='Spicy Maguro Roll'
                            text2='Spicy tuna roll topped with fresh tuna'
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1='Peppered Tuna Sashimi'
                            text2='Slices of peppered tuna with ponzu sauce'
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1='Seared Crab Roll'
                            text2='Tuna & Avocado topped with crab meat salad'
                            price='¥１５００'
                        />
                    </div>
                </div>

            </div>

            <div className="menu-container">

                <div className="menu-content">
                    <h2>Appetizers</h2>

                    <div className="menu-items">
                        <Menuitem
                            text1='Sahimi Starter'
                            text2='3kind Sashimi, 2 pieces each'
                            price='¥１５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Soft Shell Crab'
                            text2='Soft shell crab tempura,lightly fried'
                            price='¥１５００'
                        /><hr className="line"></hr>
                        <Menuitem
                            text1='Fuji Roll'
                            text2='Salmon, crab stick and tamago'
                            price='¥１５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Tuna & Octopus Salad'
                            text2='tuna, octopus, asparagus & masago'
                            price='¥１５００'
                        />
                    </div>
                </div>
                <div className="menu-img">
                    <img src={IMG10}></img>
                </div>

            </div>

            <div className="menu-container">
                <div className="menu-img">
                    <img src={IMG9}></img>
                </div>
                <div className="menu-content">
                    <h2>Udon</h2>

                    <div className="menu-items">
                        <Menuitem
                            text1='Kitsune Udon'
                            text2='Udon is most famous noodles in japan'
                            price='¥１５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Niku Udon'
                            text2='Udon is most famous noodles in japan'
                            price='¥１５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Chiken Katsu Curry Udon'
                            text2='Udon is most famous noodles in japan'
                            price='¥１５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Tori Baitan Udon'
                            text2='Udon is most famous noodles in japan'
                            price='¥１５００'
                        />
                    </div>
                </div>

            </div>

            <div className="menu-container">
                <div className="menu-content">
                    <h2>Desserts</h2>
                    <div className="menu-items">
                        <Menuitem
                            text1='Raspberry Ginger Cheesecake'
                            text2='Japanese style topped with fudge and raspberry'
                            price='¥５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Ice Cream'
                            text2='Red bean, green tea, chocolate & Vanilla'
                            price='¥５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Tempura Cheesecake'
                            text2='Tempura fried New York style Cheesecake'
                            price='¥５００'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Tempura Banana'
                            text2='Tempura fried Banana'
                            price='¥５００'
                        />
                    </div>
                </div>
                <div className="menu-img">
                    <img src={IMG12}></img>
                </div>
            </div>

            <div className="menu-container">
                <div className="menu-img">
                    <img src={IMG18}></img>
                </div>
                <div className="menu-content">
                    <h2>Cocktails</h2>
                    <div className="menu-items">
                        <Menuitem
                            text1='Cassis Liqueur & Orange'
                            text2='Famous Japanese inspired Cocktails'
                            price='¥500'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Shandy Gaff'
                            text2='Japanese inspired Cocktails'
                            price='¥500'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Peach Liqueur & Soda'
                            text2='Japanese inspired Cocktails'
                            price='¥500'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Moscow Mule'
                            text2='Japanese inspired Cocktails'
                            price='¥500'
                        />
                        <hr className="line"></hr>
                        <Menuitem
                            text1='Fuzzey Navel'
                            text2='Japanese inspired Cocktails'
                            price='¥500'
                        />
                    </div>
                </div>
</div>
                <div className="menu-container">


                    <div className="menu-content">
                        <h2>Beer</h2>
                        <div className="menu-items">
                            <Menuitem
                                text1='Sapporo Premium'
                                text2='Famous Japanese Style Beer'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Asahi Super Dry'
                                text2='Famous Japanese Style Beer'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Bud Light'
                                text2='Famous Japanese Style Beer'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Heineken'
                                text2='Famous Japanese Style Beer'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Corona'
                                text2='Famous Japanese Style Beer'
                                price='¥500'
                            />
                        </div>
                    </div>
                    <div className="menu-img">
                        <img src={IMG19}></img>
                    </div>
                    </div>

                <div className="menu-container">

                    <div className="menu-img">
                        <img src={IMG20}></img>
                    </div>
                    <div className="menu-content">
                        <h2>Sake</h2>
                        <div className="menu-items">
                            <Menuitem
                                text1='Koshino Kagetora'
                                text2='Popular Japanese Alcoholic drinks'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Kagatobi'
                                text2='Popular Japanese Alcoholic drinks'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Kasen Goukai'
                                text2='Popular Japanese Alcoholic drinks'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Shirakabegura'
                                text2='Popular Japanese Alcoholic drinks'
                                price='¥500'
                            />
                            <hr className="line"></hr>
                            <Menuitem
                                text1='Shimeharitsuru'
                                text2='Popular Japanese Alcoholic drinks'
                                price='¥500'
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        

        </>
    );
}


export default Menu;