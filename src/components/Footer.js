import React from 'react';
import logo from '../Images/logo.png';

const Footer = () => {
   return(
    <div className='footer'>
    <div className='footer-container'>

        <div className='footer-card'>
            <h6 className='f-card-header'>Start Creating Your World</h6>

            <div className='learn'>
                <p className='footer-text'>Explore fun learning and start your adventure today</p>
                <a className='learn-btn' href="#intern">Start Learning</a>
            </div>
        </div>

        <div className='footer-bottom'>
            <div className='media'>
                <a href="" className='f-logo'>
                    <img src ={logo} className='logo'  />
                </a>
                <div className='media-icons'>
                    <a className='fa fa-envelope m-icon' href='mailto:sharon@vastcreation.tech' target="_blank"></a>
                    <a className='fa fa-twitter m-icon' href="https://x.com/vastcreation_?t=Y98TyHinyyBjPEjnonpv-g&s=09" target="_blank"></a>
                    <a className=' l-icon' href='https://www.linkedin.com/company/vast-creation' target="_blank"><i className='fa fa-linkedin'></i></a>
                </div>
            </div>

            <p className='g-text'>Vast Creation<i class="fa fa-copyright"></i>2024</p>
        </div>
        


    </div>

</div>
   )
};

export default Footer;