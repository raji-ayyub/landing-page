import React from 'react';
import event from "../Images/1.png";
import event1 from "../Images/2.png";
import event2 from "../Images/3.png";
import event3 from "../Images/4.png";
import event4 from "../Images/5.png";
import event5 from "../Images/6.png";
import event6 from "../Images/7.png";


const Events = () => {
   return(
    <div className='section events'>
    <div className='container '>
        
      <div className='events-div'>
         <h4 className='section-header events-head'>Our Past Events</h4>
         <div className='events-cover'>

            <div className='img-and-text'>
               <a href={event3} target="_blank" className='img-cover'>
                  <img src={event3} className='event-img' alt = "image" />
               </a>

               <p className='events-text'></p>
            </div>

            <div className='img-and-text'>
               <a href={event} target="_blank" className='img-cover'>
                  <img src={event} className='event-img' alt = "image" />
               </a>
               <p className='events-text'></p>
            </div>

            <div className='img-and-text'>
               <a href={event1} target="_blank" className='img-cover'>
                  <img src={event1} className='event-img' alt = "image" />
               </a>
               <p className='events-text'></p>
            </div>

            <div className='img-and-text'>
               <a href={event2} target="_blank" className='img-cover'>
                  <img src={event2} className='event-img' alt = "image" />
               </a>
               <p className='events-text'></p>
            </div>

            <div className='img-and-text'>
               <a href={event5} target="_blank" className='img-cover'>
                  <img src={event5} className='event-img' alt = "image" />
               </a>
               <p className='events-text'></p>
            </div>

            <div className='img-and-text'>
               <a href={event6} target="_blank" className='img-cover'>
                  <img src={event6} className='event-img' alt = "image" />
               </a>
               <p className='events-text'></p>
            </div>

            <div className='img-and-text'>
               <a href={event4} target="_blank" className='img-cover'>
                  <img src={event4} className='event-img' alt = "image" />
               </a>
               <p className='events-text'></p>
            </div>

            

            


         </div>
      </div>
        
    </div>

</div>
   )
};

export default Events;