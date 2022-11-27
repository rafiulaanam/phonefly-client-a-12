import React from 'react';
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const PaymentModal = ({paymentInfo}) => {
    const { _id, name, description, sale_price, price, location, img, phone } =
    paymentInfo;
  const { register, handleSubmit } = useForm();
//   const [status, setStatus] =useState()
console.log(stripePromise)
  const handlePayment = (data) => {
   
  };
    return (
        <div>
             <div className=''>
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <label
            htmlFor="payment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center">
            <img className="w-28" src={img} alt="" />
          </div>
          <h3 className="font-bold text-lg mt-4">{name}</h3>
          
          <p className="card-text">
            Price: $
            <span className="text-3xl font-semibold ">{sale_price}</span>{" "}
            <del>{price}</del>
          </p>
          <p className="card-text py-4">Meeting location: {'location'}</p>
          
          <form onSubmit={handleSubmit(handlePayment)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                {...register("phone")}
                type="number"
                name="phone"
                placeholder="Enter your Phone"
                className="input input-bordered"
              />
            </div>
            
          </form>
          <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PaymentModal;