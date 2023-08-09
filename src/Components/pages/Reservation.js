import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import Select from 'react-select';
import StrokeDesign from '../Stroke';
import Footer from '../Footer'
import './Reservation.css';
import '../../App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



function Reservation() {
   
    const colourStyles = {
        menuList: styles => ({
          ...styles,
         background:'black'
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          background: isFocused
            ? '#242424'
            : isSelected
              ? 'grey'
              : undefined,
          zIndex: 1,
        }),
        menu: base => ({
          ...base,
          zIndex: 100,
        }),
      }
        

    const options = [{ value: '1', label: '1 Person'},
    { value: '2', label: '2 Person' },
    { value: '3', label: '3 Person' },
    { value: '4', label: '4 Person' },
    { value: '5', label: '5 Person' },
    { value: '6', label: '6 Person' },
    { value: '7', label: '7 Person' },
    { value: '8', label: '8 Person' },
    { value: '9', label: '9 Person' },
    { value: '10', label: '10 Person' }
    ]
    const Time = [{ value: '1', label: '9:00' },
    { value: '2', label: '10:00' },
    { value: '3', label: '11:00' },
    { value: '4', label: '12:00' },
    { value: '5', label: '13:00' },
    { value: '6', label: '14:30' },
    { value: '7', label: '15:00' },
    { value: '8', label: '16:00' },
    { value: '9', label: '17:00' },
    { value: '10', label: '18:00' },

    ]



    const [calendar, setCalendar] = useState('')

    const [open, setOpen] = useState(false)

    const refOne = useRef(null)

    useEffect(() => {
        setCalendar(format(new Date(), 'MM/dd/yyyy'))
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])
    const hideOnEscape = (e) => {
        console.log(e.key)
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }
    const handleSelect = (date) => {
        setCalendar(format(date, 'MM/dd/yyyy'))

    }

    return (
        <>
            <div className='main-container'>
                <div className='reser-head'>
                    <div className='heading'>
                        <h2><div className='designstroke'><StrokeDesign /></div>Reservation<div className='designstroke'><StrokeDesign /></div></h2>
                        <p>BOOK YOUR TABLE</p>
                    </div>
                </div>


                <div className='reser-content'>
                    <p>RESERVATION</p>
                    <h2><div className='designstroke'><StrokeDesign /></div>Book a Table<div className='designstroke'><StrokeDesign /></div></h2>
                    <p>All booking payment is secured with credit card,
                        no charges will be apply for online booking.</p>
                    <h4>Booking request +90-1234-5678 or fill out the order form</h4>
                    <div className='booking-section'>
                    <div className='reser-container'>

                        <div className='reser-name'>
                            <input type='text' placeholder='Your Name'></input>
                        </div>
                        <div className='ph-num'>
                            <input type='digit' placeholder='Phone Number'></input>
                        </div>
                        <div className="calendarWrap">
                            <input
                                value={calendar}
                                readOnly
                                className="inputBox"
                                onClick={() => setOpen(open => !open)}
                            />
                            <div ref={refOne}>
                                {open &&
                                    <Calendar
                                        date={new Date()}
                                        onChange={handleSelect}
                                        className="calendarElement"
                                    />
                                }
                            </div>
                        </div>
                    
                    </div>
                    <div className='reser-container'>
                        <div className='person'>
                            <Select className='noofperson'
                                options={options}
                                placeholder={' No of Person '}
                                styles={colourStyles}
                            />
                        </div>
                    
                        <div className='time'>
                            <Select options={Time}
                                placeholder={'Select Time'}
                                styles={colourStyles}
                            />
                        </div>
                    
                        <div className='booknow'>
                            <button type='submit'>Book Now</button>                     
                    </div>
                </div>
                </div>

</div>

                <div className='location'>
                    <div className='left'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208791.96928669946!2d136.76149534004523!3d35.1472793267635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003709e107b2365%3A0x2a9622d4e8ceb352!2sNagoya%2C%20Aichi!5e0!3m2!1sen!2sjp!4v1691041453784!5m2!1sen!2sjp"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='right'>
                        <h2>NAGOYA</h2>
                        <div className='right-content'>
                            <h3>Contact Us</h3>
                            <Link to="/">Sushi Restaurant, Nagoya</Link>
                            <Link to="/">100200 Aichi, 123-3456-7658</Link>
                            <Link to="/">sushi-reservation@gmail.com</Link>
                        </div>
                        <div className='right-content'>
                            <h3>Opening hours</h3>
                            <Link to="/">Mon - Fri: 9:00 am-22:00 pm</Link>
                            <Link to="/">Sat - Sun: 9:00 am-24:00 pm</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Reservation;