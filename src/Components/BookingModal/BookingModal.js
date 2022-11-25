import React from "react";
import toast from 'react-hot-toast';

const BookingModal = ({modalInfo}) => {
  const {name,description,sale_price,price,location,img}=modalInfo;

  const handleBooked =(event)=>{
    event.preventDefault()
    const form = event.target;
    const phone = form.phone.value
    console.log(phone)
    toast.success('Booking Successfully')
  }

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
            <form onSubmit={handleBooked}>
            <input type="text" name="phone" placeholder="Phone" defaultValue={'+880'} className="input input-bordered  w-full " />
          <div className="modal-action">
            <input type="submit" className="text-white w-full border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]" value="Submit" />
          
          </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
