import React from "react";

const AdvertiseArea = () => {
  return (
    <div className="mt-10">
      <div className="my-10  container mx-auto">
        <h1 className=" font-semibold text-3xl">
          Our Advertisement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                
              <label   htmlFor="booking-modal" className="text-white border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]">Book Now</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseArea;
