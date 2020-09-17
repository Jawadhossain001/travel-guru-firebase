import React from 'react';
import './HotelDetails.css'
const HotelDetails = (props) => {
    const {title, star, reviewed, bedroom, bed, bath, imgUrl, guest, price}=props.hotel
    return (
        <div style={{display:"flex", padding:"10px", alignItems:"center"}}>
           <div>
               <img style={{width:"250px"}} src={imgUrl} alt=""/>
           </div>
           <div className="hotel-text-container" style={{marginLeft:"10px"}}>
               <h4 style={{margin:"0"}}>{title}</h4>
               <div className="hotel-features">
                   <span>{guest} guests</span>
                   <span>{bedroom} bedrooms</span>
                   <span>{bed} beds</span>
                   <span>{bath} baths</span>
               </div>
               <p>Air conditioning kitchen</p>
               <p>Cancellation flexibility available</p>
               <div className="hotel-review" style={{display:"flex", alignItems:"center"}}>
                    <span>   {star} ({reviewed})</span>
                    <span>${price}/<span className="custom-color">Day & Night</span></span>
                    <span className="custom-color">167 total</span>
               </div>
           </div>
        </div>
    );
};

export default HotelDetails