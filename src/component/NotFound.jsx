import React from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div className='h-100  d-flex flex-column justify-content-center align-items-center'>
        <h1>Oops !!!</h1>
        <h3 className='text-center mb-5'>Page you are looking for is not available !</h3>
        <Button onClick={()=>navigate('/home')}>back to Dashboard</Button>
    </div>
  )
}

export default NotFound