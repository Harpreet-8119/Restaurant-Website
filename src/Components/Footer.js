import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';
import IMGLOGO from './assets/logo.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
function Footer() {
    const form= useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6o73vow', 'template_76he0oh', form.current, '7FuJM_mOCdRv7JLCs')
  
      e.target.reset()
       
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='footer-main'>
            <div className='footer-content-text' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <p >
                    A good restaurant is like a vacation; it transports you,
                    and it becomes a lot more than just about the food.
                </p>
            </div>
            <div className='footer-container'>
                <div className='footer-flex' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <h2 className='footer-content-heading'>
                        Contact Us
                    </h2>
                    <section className='footer-content'>
                        <div className='input-areas'>
                            <form ref={form} onSubmit={sendEmail}>
                                <input type='name' name='text' placeholder='Your name'
                                    className='footer-input' required/>
                                <input type='email' name='email' placeholder='Your email'
                                    className='footer-input' required/>
                                <input type="textarea" className='footer-input' placeholder='Message' required/>
                                <button className="footer-btn" type="submit">Send</button>
                            </form>
                        </div>
                    </section>
                </div>
                <div className='footer-flex' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className='footer-links'>
                        <div className='footer-links-wrapper'>
                            <div className='footer-links-items'>
                                <h2>Opening hours</h2>
                                <Link to="/">Mon - Fri: 9:00 am-22:00 pm</Link>
                                <Link to="/">Sat - Sun: 9:00 am-24:00 pm</Link>
                            </div>
                            <hr></hr>
                            <div className='footer-links-items'>
                                <h2>Visit Us</h2>
                                <Link to="/">Sushi Restaurant, ABC City</Link>
                                <Link to="/">100200 Aichi, 123-3456-7658</Link>
                                <Link to="/">sushi-reservation@gmail.com</Link>
                            </div>
                            <hr></hr>
                            <div className='footer-links-items'>
                                <h2>Get In Touch</h2>
                                <div className='social-icons'>

                                    <Link className='social-icon-link facebook' to="https://www.facebook.com/"
                                        target='_blank'
                                        aria-label='Facebook'>
                                        <i className='fab fa-facebook'></i>
                                    </Link>
                                    <Link className='social-icon-link instagram' to="https://www.instagram.com/"
                                        target='_blank'
                                        aria-label='instagram'>
                                        <i className='fab fa-instagram'></i>
                                    </Link>
                                    <Link className='social-icon-link line' to="https://line.me/en/"
                                        target='_blank'
                                        aria-label='Line'>
                                        <i className='fab fa-line'></i>
                                    </Link>
                                    <Link className='social-icon-link Twitter' to="https://www.twitter.com/"
                                        target='_blank'
                                        aria-label='LTwitter'>
                                        <i className='fab fa-twitter'></i>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='social-media'>
                        <div className='social-media-wrap'>
                            <div className='footer-logo'>
                                <Link className='social-logo'>
                                    <img src={IMGLOGO} />
                                </Link>
                            </div>
                            <div className='website-rights'>
                            <small className='website-rights'>Sushi @ 2023</small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
