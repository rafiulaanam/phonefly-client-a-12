import React, { useState } from "react";
import axios from 'axios'

const AdminDashboard = () => {
  const [repo, setRepo] = useState(0)
  const [seller, setSeller] = useState(0)
  const [buyer, setBuyer] = useState(0)




  axios.get('https://phonefly-server-a-12-rafiulaanam.vercel.app/users?role=Buyer')
  .then(res=>{
    // console.log(res);
    setBuyer( res.data)
  })
  // .catch(e=>console.log(e))
  axios.get('https://phonefly-server-a-12-rafiulaanam.vercel.app/users?role=Seller')
  .then(res=>{
    // console.log(res);
    setSeller( res.data)
  })
  // .catch(e=>console.log(e))
  axios.get('https://phonefly-server-a-12-rafiulaanam.vercel.app/reports')
  .then(res=>{
    // console.log(res);
    setRepo( res.data)
  })
  // .catch(e=>console.log(e))

  return (
    <div>
      <div className="stats shadow lg:m-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Buyer</div>
          <div className="stat-value">{buyer.length}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Sellers</div>
          <div className="stat-value">{seller.length}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">{repo.length}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
