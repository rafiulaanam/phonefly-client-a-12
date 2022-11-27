import React,{useContext,useState} from 'react';
import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../../../Context/AuthProvider';
import BookedCards from './BookedCards';
import PaymentModal from '../../../Components/PaymentModal/PaymentModal';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const [paymentInfo, setPaymentInfo] = useState(null);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

const { data:bookings =[]} = useQuery({
  queryKey:['bookings' , user?.email],
  queryFn: async ()=>{
    const res =await fetch(url)
    const data = res.json()
    return data
  } 
})

    return (
       <div className='mx-10 my-10'>
         <h2 className="text-5xl font-bold">My Orders</h2>
        <div className='grid  '>
            {
                bookings.map(book=><BookedCards
                key={book._id}
                book={book}
                setPaymentInfo={setPaymentInfo}
                ></BookedCards>)
            }
        </div>
        {
        paymentInfo &&
        <PaymentModal
        paymentInfo={paymentInfo}
        ></PaymentModal>
        }
       </div>
    );
};

export default MyOrders;