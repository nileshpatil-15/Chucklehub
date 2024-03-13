import {Outlet} from 'react-router-dom'
import Typist from 'react-typist';

const AuthLayout = () => {
  return (
    <>
    <section className='d-flex flex-grow-1  justify-content-center align-items-center '>
    <Outlet/>

    </section>
    <section>

    </section>
   
    <img src="/marcela-rogante-ohbfKsIEbJQ-unsplash.jpg" className="img-fluid w-50 d-none d-md-block" alt="Responsive image"></img>
    </>
  )
}

export default AuthLayout