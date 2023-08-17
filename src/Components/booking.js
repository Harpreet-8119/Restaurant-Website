import React from 'react';
import './booking.css';
import '../App.css';
import Reservation from './pages/Reservation';
import StrokeDesign from './Stroke';
import IMG11 from './assets/img-11.webp';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Booking() {
    useEffect(() =>{
        Aos.init({duration:2000});
          },[]);
    return (
        <>
            <div className='booking_container'>
                <div className='event__detail' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <div className='design'>  
                        <h2><div className='designstroke'><StrokeDesign /></div>Events & Business Meetings<div className='designstroke'><StrokeDesign /></div></h2>
                       
                    </div>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className='bookingbtn'>
                    <button ><Link to='/sign-up'>BOOK A TABLE</Link></button></div>
                </div>
                <div className='img_events'>
                    <img src={IMG11} />
                </div>
            </div>
        </>
    )
}
export default Booking
