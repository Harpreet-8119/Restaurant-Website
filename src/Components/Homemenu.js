import react from 'react';
import './Homemenu.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG14 from './assets/img-14.jpg';
function Homemenu() {
    return (
        <>
            <div className='Hmenu-container'>
                <h2>Explore Our Menu</h2>
                <div className='Hmenu'>
                    <div className='Hmenu-items'>
                        <div className='Hmenu-items-content'>
                            <p>Our Selection</p>
                            <h2>Food</h2>
                            <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            </span>

                            <ul>
                                <li>Fusion Sushi</li>
                                <li>Hosomaki</li>
                                <li>Sushi Rolls</li>
                                <li>Sashimi</li>
                                <li>Udon</li>
                                <li>Appetizers</li>
                                <li>Desserts</li>
                            </ul>
                        </div>
                    </div>

                    <div className='Hmenu-items'>
                        <div className='img-menu'>
                            <img src={IMG14}></img>
                        </div>
                    </div>

                    <div className='Hmenu-items'>
                        <div className='Hmenu-items-content'>
                            <p>Our choice</p>
                            <h2>Drink</h2>
                            <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


                            </span>
                            <ul>
                                <li>Cocktails</li>
                                <li>Soft drinks</li>
                                <li>Mocktails</li>
                                <li>Beer</li>
                                <li>Sake</li>
                                <li>Whisky</li>
                                <li>Beverages</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='view-btn'>
                    <button className="view-menu">View the full Menu</button>
                </div>
            </div>



        </>
    )
}
export default Homemenu