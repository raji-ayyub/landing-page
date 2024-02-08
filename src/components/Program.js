import React from 'react';
import bulb from '../Images/bulb.svg';
import sparkle from '../Images/sparkle.png';
import sparkle2 from '../Images/sparkle2.svg';
import chat from '../Images/chats.png';
import chat2 from '../Images/chat2.svg';
import smiley from '../Images/smiley.png';
import sparkles from '../Images/sparkles.png';

const Program = () => {
   return(
    <div className='section program'>
        <div className='container'>
            <div className='programs col w1'>
                
                    <div className='section-header w2'>
                        <p class='stily-text'>WHAT  WE DO</p>
                        <h4 className='header2'>Inspiring young people to create their world</h4>
                       
                    </div>

                    <div className='box-div row'>
                    <div className='row box-cover'>
                    <h6 className='card-header'>Innovative Programs</h6>
                            <div className='box bg-lorange col '>
                                <div className='rect1 bg-dpink row'>
                                        <div className='square  bg-orange'></div>
                                        <p className='card-text'><b>Think with Micro:bit</b></p>
                                </div>

                                <div className='rect2 bg-lem row'>
                                        <div className='square  bg-green'></div>
                                        <div className='long'></div>
                                </div>

                                
                            </div>

                            <p className='card-bottom-text'>Explore our interactive programs, starting with <b>Think With the Micro:bit</b>, designed to develop essential thinking skills in kids aged 8-13.</p>
                    </div>

                    <div className='row ref box-cover w3'>
                    <h6 className='card-header'>Tech-Infused Learning</h6>
                            <div className='box box-2 bg-p col '>
                               <div className='bulb-circle'>
                                <img src={bulb} className='bulb' alt="bulb" />
                                <img src={sparkle} className='sparkle' alt="sparkle" />
                               </div>
                               
                            </div>
                            <p className='card-bottom-text'>We pioneer tech-driven education, fostering creativity and critical thinking in children and youg adults.</p>
                    </div>

                    <div className='row box-cover ref2 w3'>
                    <h6 className='card-header'>Fun and interactive</h6>
                            <div className='box box-2 bg-yellow col '>
                                <div className='chat-cover'>
                                        <img src={chat} className='chat' alt="chat" />
                                </div>
                                
                                
                            </div>
                            <p className='card-bottom-text'>Vast creation offers a learning environment that's not only educational but also fun and interactive.</p>

                    </div>
                    </div>
                
            </div>
        </div>

    </div>
   )
};

export default Program;