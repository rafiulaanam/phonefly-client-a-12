import React from 'react';

const AdsCard = ({ads}) => {
    const {name,description,img}=ads;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                
              <label   htmlFor="booking-modal" className="text-white border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]">Book Now</label>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AdsCard;