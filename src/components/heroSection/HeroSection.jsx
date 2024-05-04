import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '590px'
};

const slideImages = [
  {
    url: 'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg ',
   
  },
  {
    url: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Simple-E-commerce-Banner-Design-scaled.jpg',
   
  },
  {
    url: 'https://i.pinimg.com/originals/81/2b/74/812b745680e9c4cb88830e54f31629a2.png',
 
  },
];

const HeroSection = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={true} duration={3000}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default HeroSection;
