import { Link } from "react-router-dom"
import Logo from "../ui/logo"

const  Navbar = () =>{
    return (
      <nav className="border-b bg-white md:py-2 py-3 px-5 md:px-10 flex justify-between items-center md:space-x-5 w-full border-b border-gray-300">
       <div className="hidden md:flex items-center space-x-5">
         {/* logo */}
          <Link to="/">
          <Logo/>
          </Link>
        {/* logo */}
        {/* menu */}
        <ul className="flex items-center space-x-8 text-sm font-[500] text-gray-700">
                <li className="flex items-center space-x-2">
                    <span>Hire Freelancer</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center space-x-2">
                    <span>Find job</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </li>
        </ul>
        {/* menu */}
       </div>
        {/* right */}
        <div className="hidden md:flex items-center space-x-8">
          {/* right menu */}
          <ul className="flex items-center space-x-8 text-sm font-[500] text-gray-700">
            <li>Register</li>
            <li>Login</li>
          </ul>

          <Link to={""} className="py-2 px-5 text-white text-center font-[500] text-sm rounded bg-blue-500 hover:bg-blue-400">
            Post a job
          </Link>
         
          {/* right menu */}
          {/* profile */}

          {/* profile */}
          </div>
        {/* right */}

        {/* mobile view */}
        <div className="md:hidden flex justify-between items-center">
           {/* logo */}
           <Link to="/">
            <Logo/>
           </Link>
          {/* logo */}
          <Link to={""} className="w-[50%] py-2 px-5 text-white text-center font-[500] text-sm rounded bg-blue-500 hover:bg-blue-400">
            Post a job
          </Link>
        </div>
        {/* mobile view */}

      </nav>
    )
}

export default Navbar