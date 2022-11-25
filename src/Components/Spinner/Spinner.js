import React from 'react';
import loading from '../../Assets/icon/loading.svg';

const Spinner = () => {
    return (
      <div className='bg-white h-screen text-black flex justify-center items-center'>
          <div className='flex'>
            <p className='text-8xl font-extrabold'>L</p>
            <img className='w-24 mt-3' src={loading} alt=''/>
            <p className='text-8xl font-extrabold'>ading....</p>
        </div>
      </div>
    );
};

export default Spinner;