import React, { useContext,useState } from 'react';
import reg from '../../Assets/img/register.jpg'
import { FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import useToken from '../../Hooks/useToken';


const Register = () => {//formState: { errors }
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail)
  if(token){
  navigate('/')
  }

  const { register, handleSubmit,  } = useForm();
  const {createUser,updateUser,continueWithGoogle} =useContext(AuthContext)
  

const handleRegister = (data,event)=>{
 
  const form = event.target;
   
    createUser(data.email, data.password)
    .then(result=>{
      const user = result.user
      console.log(user)
      form.reset()
     
      handleUpdateUser(data.name,data.email,data.phone,data.location,data.role)
      toast.success("Register Successfully")
      
    })
   .catch(e=>console.log(e))
}
const handleUpdateUser=(name,email,phone,location,role)=>{
  const userInfo={
    displayName:name
  }
  updateUser(userInfo)
   .then(()=>{
    
    saveUsersData(name,email,phone,location,role)
    })
    .catch(e=>console.log(e))
}

const handleGoogle=()=>{
  continueWithGoogle()
  .then(result=>{
    const user = result.user
    console.log(user)
    const role ='Buyer'
    const location = null
    saveUsersData(user.displayName,user.email,user.phoneNumber,location,role)

  })
  .catch(e=>console.log(e))
}

const saveUsersData=(name,email,phone,location,role)=>{
  const userData={
    name,
    email,
    phone,
    location,
    role,
    identity:"Not Verified"
  }
  fetch('http://localhost:5000/users',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(userData)
  })
  .then(data=>{
   console.log(data)
   setCreatedUserEmail(email)

    
  })
  .catch(e=>console.log(e))
}
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className=" lg:w-1/2 ">
      <figure><img src={reg} alt=''/></figure>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
      <form onSubmit={handleSubmit(handleRegister)} className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
          {...register("name")}
          type="text" name='name' placeholder="Enter your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          {...register("email")}
          type="email" name='email' placeholder="Enter your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
          {...register("phone")}
          type="number" name='phone' placeholder="Enter your Phone" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <select
          {...register("location")}
          name='location' className="select select-bordered w-full max-w-xs">
  <option disabled selected>select your location</option>
  <option value={'Sylhet'}>Sylhet</option>
  <option value={'Dhaka'}>Dhaka</option>
</select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          {...register("password")}
          type="password" name='password' placeholder="Enter your Password" className="input input-bordered" />
          
          <label className="flex items-center mt-5">
            <input 
            {...register("role")}
             type="radio" name="role" className="radio" defaultValue={'Buyer'} defaultChecked />
            <span className="label-text ml-3">I am a Buyer</span>
          </label>
          <label className=" flex items-center mt-4">
            <input
            {...register("role")}
            type="radio" name="role" className="radio" defaultValue={'Seller'}  />
            <span className="label-text ml-3">I am a Seller</span>
          </label>
        </div>
        <div className="form-control mt-6">
      
          <input type="submit" className="text-white w-full border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]"  />
        </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className='btn btn-outline rounded-full hover:border-none hover:bg-gradient-to-r from-[#874da2] to-[#c43a30] '><FaGoogle className='mr-3 text-xl'/>Continue With Google </button>
      
    </div>
  </div>
</div>
    );
};

export default Register;