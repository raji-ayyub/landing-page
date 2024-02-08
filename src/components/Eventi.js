import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image1 from "../Images/1.png";
import Image2 from "../Images/2.png";
import Image3 from "../Images/3.png";
import Image4 from "../Images/4.png";
import Image5 from "../Images/5.png";
import Image6 from "../Images/6.png";
import Image7 from "../Images/7.png";



const MultiCarousel = () => {

    const responsive= {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1,
            infinite: true,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768},
            items: 3,
            slidesToSlide: 1,
            infinite: true,
        },
        mobile: {
            breakpoint: { max: 768, min: 0},
            items: 1,
            slidesToSlide: 1,
            infinite: true,
        },
    };

    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];


    return (
        
        <div className='coli'>
            <h3 className='section-header   events-header'>Our past events</h3>
            <Carousel responsive ={responsive} autoPlay={true} autoPlaySpeed={3000} className='carousel-container'>
            
            {images.map((image, index) => (
                <a key={index} href={image} target='_blank' className='carousel-item'>
                    
                    <img src={image} alt={`Item ${index + 1}`}  className='carousel-image'  />
                </a>
            ))}
        </Carousel>
        </div>
    );
};

export default MultiCarousel;