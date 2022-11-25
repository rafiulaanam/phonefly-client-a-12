import React, { useContext } from 'react';
import login from '../../Assets/img/login.jpg'
import { FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

const Login = () => { //formState: { errors }
  const { register, handleSubmit,  } = useForm();
  const navigate = useNavigate()
  const {loginUser} =useContext(AuthContext)

  const handleLogin = (data,event)=>{

    const form = event.target;


    loginUser(data.email, data.password)
    .then(result=>{
      const user = result.user
      console.log(user)
      form.reset()
     
      toast.success("Login Successfully")
      navigate('/')
      
    })
   .catch(e=>console.log(e))
   
}
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className=" lg:w-1/3 ">
      <figure><img src={login} alt=''/></figure>
    </div>
    <div className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleLogin)} className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          {...register("email")}
          type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          {...register("password")}
          type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#!" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="text-white w-full border-none px-8 btn bg-gradient-to-r from-[#874da2] to-[#c43a30]" />
        </div>
      </form>
        <div className="divider">OR</div>
        <button className='btn btn-outline rounded-full'><FaGoogle className='mr-3 text-xl'/>Continue With Google</button>
      
    </div>
  </div>
</div>
    );
};

export default Login;