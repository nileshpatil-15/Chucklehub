import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import {Outlet} from 'react-router-dom'
const RootLayout = () => {
  return (
   <div className=" d-flex flex-column h-100" >
   <div>
   <Navbar/>
   </div>
   <div className="flex-grow-1">
<Outlet/>
   </div>
   <div>
<Footer/>
   </div>
  
   </div>
  )
}

export default RootLayout