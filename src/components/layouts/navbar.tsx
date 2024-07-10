import { Link } from "react-router-dom"
import Logo from "../ui/logo"

const  Navbar = () =>{
    return (
      <nav className="border bg-white py-2 px-5 md:px-10 flex justify-between items-center space-x-5 w-full border-b border-gray-300">
       <div className="flex items-center space-x-5">
         {/* logo */}
         <div>
          <Link to="/">
          <Logo/>
          </Link>
        </div>
        {/* logo */}
        {/* menu */}
        <ul className="flex items-center space-x-8 text-sm font-[500] text-gray-700">
          <li>Hire Freelancer</li>
          <li>Find Job</li>
        </ul>
        {/* menu */}
       </div>
        {/* right */}
        <div className="flex items-center space-x-8">
          {/* right menu */}
          <ul className="flex items-center space-x-8 text-sm font-[500] text-gray-700">
            <li>Register</li>
            <li>Login</li>
          </ul>

          <Link to={""} className="py-2 px-5 text-white font-[500] text-sm rounded bg-blue-500 hover:bg-blue-400">
            Post a job
          </Link>
         
          {/* right menu */}
          {/* profile */}

          {/* profile */}
          </div>
        {/* right */}

      </nav>
    )
}

export default Navbar