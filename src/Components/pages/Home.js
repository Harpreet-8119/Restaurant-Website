import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Homecards from '../Homecards';
import Homemenu from '../Homemenu';
import MenuStrength from '../Menustrength';
import Homeabout from '../homeabout';
import Booking from '../booking';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection />
            <Homemenu />
            <Homecards />
            <Homeabout />
            <MenuStrength />
            <Booking />
            <Footer />
        </>
    );
}

export default Home;