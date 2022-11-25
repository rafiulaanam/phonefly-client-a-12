import React from "react";

const CustomerReview = () => {
  return (
    <div>
      <div className="container mx-auto my-20">
        <h1 className="text-3xl font-semibold">Customer Review</h1>
        <div className="card bg-base-200 mt-10 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Kuddus Ali</h2>
            <p className="text-sm text-blue-600">Dhaka</p>

            <div className="-mt-20 absolute right-8 flex flex-col">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt=""/>
                </div>
              </div>
              <div className="rating rating-sm mt-3">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              </div>
            </div>

            <p>Service was very nice. I am very satisfied overall.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
