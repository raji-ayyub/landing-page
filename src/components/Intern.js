import React from 'react';
import sparkle from '../Images/sparkle2.svg';
import pips from '../Images/pips.png';

const Intern = () => {
   return(
    <div className='section intern' id='intern'>


    <div className='container'>
 

        <div className='bit-div bg-purple'>
            <h4 className='header2 '>Technical Internship Program - by Vast Hub & One Hub.</h4>
            <p className='h-text2 '>This program  is for creative, tech-curious individuals interested in getting trained to teach robotics and game development to  students in schools.</p>

                
            

            <div className='thinking-skills'>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>LEGO Robotics kit</p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Resilience and Perseverence</p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Problem Solving</p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Communication</p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Teamwork</p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Independence</p></div>
                <div className="skill"><img src={sparkle} className='sparkle2' /> <p>Imagination and Creativity</p></div>
                <div className='skill'><img src={sparkle} className='sparkle2' /> <p>Planning</p></div>
                
            </div>

            <div className='btn-cover row'>

                <a className='btn-syllabus' href="https://drive.google.com/file/d/1yt5Bz4WWugBr8YyscNkYImcwM2FVtOyY/view?usp=sharing" target="_blank" >
                    View Syllabus
                </a>
                <a className='btn-reg' href='https://docs.google.com/forms/d/e/1FAIpQLScEs0M0tw-BuJqESYTq49eMeF7wnAJHo7OhPANMxeB7ZrARSQ/viewform?usp=sf_link' target='_blank'>
                Register
            </a>

            </div>

            {/* <img src={pips} class="pips pips2" alt= 'pips' />
            <i className='fa fa-star pip-icon a'></i>
            <i className='fa fa-star pip-icon b'></i> */}

        </div>

       

        


        

    </div>



</div>
   )
};

export default Intern;