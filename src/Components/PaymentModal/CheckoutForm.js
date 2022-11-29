import React,{useState,useEffect,useContext} from 'react';

import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';



const CheckoutForm = ({paymentInfo}) => {
  const {user} = useContext(AuthContext)
  const {sale_price,email,buyer_name} = paymentInfo
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(" ");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`http://localhost:5000/create-payment-intent?email=${user?.email}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         authorization:  `Bearer ${localStorage.getItem('accessToken')}` //for jwt
         
         },
      body: JSON.stringify({ sale_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [sale_price,user?.email]);


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();


    if (!stripe || !elements) {
      
      return;
    }

   
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }


    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      '{PAYMENT_INTENT_CLIENT_SECRET}',
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer_name,
            email:email
          },
        },
      },
    );
    if(paymentIntent.status === "succeeded"){
      toast.success('payment successful');
    }

  };

  return (
    <form onSubmit={handleSubmit} className='mt-10'>


      <div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      </div>
    
      <button type="submit"
                className="text-white w-full mt-10 border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]"  disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
