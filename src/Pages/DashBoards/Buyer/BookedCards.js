import React from 'react';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';

const BookedCards = ({book}) => {
    const {name,status,payment,img}= book;
    return (
        <div className='my-5'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Your product have already {status} but {payment}</p>
    <div className="card-actions justify-end">
      <PrimaryButton>Pay</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookedCards;