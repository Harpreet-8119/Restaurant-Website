import React from 'react';
import './booking.css';
import '../App.css';
import Reservation from './pages/Reservation';
import StrokeDesign from './Stroke';
import IMG11 from './assets/img-11.webp';
function Booking() {
    return (
        <>
            <div className='booking_container'>
                <div className='event__detail'>
                    <div className='design'>  
                        <h2><div className='designstroke'><StrokeDesign /></div>Events & Business Meetings<div className='designstroke'><StrokeDesign /></div></h2>
                       
                    </div>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                    <button>BOOK A TABLE</button>
                </div>
                <div className='img_events'>
                    <img src={IMG11} />
                </div>
            </div>
        </>
    )
}
export default Booking
