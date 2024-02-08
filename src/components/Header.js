import React from 'react';
import background from '../Images/img-bg.jpg';
import asterisk from '../Images/asterisk.svg';
import pips from '../Images/pips.png';

const Header = () => {
   return(
    <div className='header'>
    <div className='container rad purp-b'>

        <div className='bg-image-div'>
            <img src={background} class="header-bg" alt = "background" />
            <img src={pips} class="pips" alt= 'pips' />
            <i className='fa fa-star pip-icon a'></i>
            <i className='fa fa-star pip-icon b'></i>
            <i className='fa fa-triangle pip-icon x'></i>
            <i className='fa fa-triangle pip-icon y'></i>
        </div>
        

        <div className='hero'>
            <h2 className='header1 '><span className='l-gap'>Unlocking Talents,</span><br /> 
                Nurturing<img src={asterisk}  className='asterisk' alt='asterisk' />
            Dreams
            </h2>
            <p className='h-text '>Vast Creation is where creativity meets technology. Explore fun learning as you create your own world. Start your adventure today.</p>

            <a className='btn-started' href='#intern'>
                Get Started
            </a>
        </div>
    </div>

</div>
   )
};

export default Header;