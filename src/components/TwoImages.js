import React from 'react';
import './TwoImages.css';

const TwoImages = ({ image1, image2, alt1, alt2 }) => {
  return (
    <div className="two-images-container">
      <div className="image-wrapper me-5">
        <img src={require("./download.png")} alt={alt1} className="responsive-image me-5" style={{height:"300px", width:"300px"}}/>
      </div>
      <div className="image-wrapper ms-5">
        <img src={require("./abc.png")} alt={alt2} className="responsive-image ms-5" style={{height:"300px", width:"300px"}}/>
      </div>
    </div>
  );
};

export default TwoImages;
