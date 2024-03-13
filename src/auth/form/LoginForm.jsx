import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
function LoginForm() {
  const[sumbit,setSubmit]=useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
const navigate=useNavigate()
  const onSubmit = (data) => {
    setSubmit(true)
    setTimeout(()=>{
      navigate('/home')
    },2000)
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow rounded bg-light">
            {/* Email field */}
            <div className="form-group">
              <h3 className='text-center '>Chucklehub</h3>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`mb-2 form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            {/* Password field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`mb-2 form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder="Enter your password"
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="mb-4 d-flex justify-content-between">
              <div>
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
              
              </div>
           
              <a href="/forgot-password" className="ml-auto">Forgot Password?</a>
            </div>

            {/* Login button */}
            {sumbit?(<button className="btn btn-primary btn-block w-100" type="submit" >
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="sr-only">Loading...</span>
</button>):(            <button type="submit" className="btn w-100 btn-primary btn-block">Login</button>
)}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
