import React from 'react';
import Header from './Header';
import Navbar  from './Navbar';
import Program from './Program';
import Footer from './Footer';
import Main from './Main';
import Microbit from './Microbit';
import Events from './Events';
import MultiCarousel from './Eventi';
import Intern from './Intern';


const Home = () => {
    return(
        <div className='home'>
            <Navbar />
            <Header />
            <Program />
            <Intern />
            <Microbit/>
            <MultiCarousel />
            <Events />
            <Footer />
            
        </div>
    )
};

export default Home;