import React from 'react';
import sparkle from '../Images/sparkle2.svg';
import pips from '../Images/pips.png';

const Microbit = () => {
   return(
    <div className='section microbit' id='micro-bit'>


    <div className='container'>
        
        <div className='double-div-cover red'>

        <div className='bit-div bg-cyan '>
            <h4 className='header2 '>Think with the Micro:bit</h4>
            <p className='h-text2 '>This program is for students (<span class="num">8-13</span> yrs) to learn how to think like a leader. <br/>
            This eight session program focuses on developing leadership skills, blending technical proficiency with the micro:bit, and creative  expression.
            </p>

                
            

            <div className='thinking-skills'>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Design Thinking </p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Abstract Thinking </p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Analytical Thinking </p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Strategic Thinking </p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Critical Thinking </p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Big Picture Thinking </p></div>
                <div className="skill"><img src={sparkle} className='sparkle2' /> <p>Detail Oriented Thinking </p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Creative Thinking </p></div>
                
            </div>

             <div className='btn-cover row'>

                <a className='btn-syllabus' href='https://drive.google.com/file/d/1tH0FtyESGlcosKDiK7nRANXQFbt09_63/view?usp=sharing' target='_blank'>
                    View Syllabus
                </a>
                <a className='btn-reg' href='https://docs.google.com/forms/d/e/1FAIpQLSfDh3OPodS_a3_5diYlnLowNn6J6OdB46L3fA58Jh71EMvqqw/viewform?usp=sf_link' target='_blank'>
                Register
            </a>

            </div>

            <img src={pips} class="pips pips2" alt= 'pips' />
            <i className='fa fa-star pip-icon a'></i>
            <i className='fa fa-star pip-icon b'></i>

        </div>

       <div className='cover'>
       <div className='trapez2'></div>
        <div className='trapez'></div>

        <div className='upcoming-div  bg-lemon '>
        <h4 className='header2 '>Upcoming Programs</h4>
            <p className='h-text '>Vast Creation's vision is to be one of the world’s leading providers of fun and interactive talent development experiences using technology.</p>

                
            

            <div className='upcomings'>
                <p className="titles"><i className='fa fa-lock'></i>Robotics with LEGO </p>
                <p className="titles"><i className='fa fa-lock'></i>Game Development with Microsoft Arcade </p>
                <p className="titles"><i className='fa fa-lock'></i>Game Development with Micro:bit </p>
            
                <p className="titles"><i className='fa fa-lock'></i>Machine Learning with Micro:bit </p>
                
            </div>

           
        </div>
       </div>

        


        </div>

    </div>



</div>
   )
};

export default Microbit;