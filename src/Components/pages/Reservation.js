import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import Select from 'react-select';
import StrokeDesign from '../Stroke';
import './Reservation.css';
import '../../App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



function Reservation() {

    const options = [{ value: '1', label: '1 Person' },
    { value: '2', label: '2 Person' },
    { value: '3', label: '3 Person' },
    { value: '4', label: '4 Person' },
    { value: '5', label: '5 Person' },
    { value: '6', label: '6 Person' },
    { value: '7', label: '7 Person' },
    { value: '8', label: '8 Person' },
    { value: '9', label: '9 Person' },
    { value: '10', label: '10 Person' },
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
                    <h2><StrokeDesign/>Reservation<StrokeDesign/></h2>
                    <p>BOOK YOUR TABLE</p>
                </div>
                </div>



                <div className='reser-content'>
                    <p>RESERVATION</p>
                    <h2><StrokeDesign/>Book a Table<StrokeDesign/></h2>
                    <p>All booking payment is secured with credit card, 
                    no charges will be apply for online booking.</p>
                    <h4>Booking request +90-1234-5678 or fill out the order form</h4>
                    <div className='reser-container'>

                        <div className='person'>
                            <Select className='noofperson'
                                options={options}
                                placeholder={' 1 Person  '}
                            />
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


                        <div className='time'>
                            <Select options={Time}
                                placeholder={'Time'}
                            />
                        </div>

                        <div className='booknow'>
                            <button type='submit'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Reservation;