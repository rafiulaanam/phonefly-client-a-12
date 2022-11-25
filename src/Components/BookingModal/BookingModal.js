import React from "react";

const BookingModal = ({modalInfo}) => {
  const {name,description,sale_price,price,location,img}=modalInfo;

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="flex justify-center">
          <img className="w-28" src={img} alt="" />
          </div>
          <h3 className="font-bold text-lg mt-4">
           {name}
          </h3>
          <p className="py-4">
          {description}
          </p>
          <p className="card-text">
            Price: $
            <span className="text-3xl font-semibold ">{sale_price}</span>{" "}
            <del>{price}</del>
          </p>
          <p className="card-text py-4">
            Meeting location: {location}
            </p>
            <input type="text" placeholder="Phone" defaultValue={'+880'} className="input input-bordered  w-full " />
          <div className="modal-action">
          <label   htmlFor="booking-modal" className="text-white w-full border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]">Submit</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
