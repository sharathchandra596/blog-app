import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";


function Navbar() {
    const user= false
  return (
    <div className="flex items-center justify-between px-2 md:px-[90px] py-2 ">
      <h1 className="text-lg md:text-xl font-extrabold"> <Link to="/">Blog_Bazaar</Link></h1>
      <div className="flex justify-center items-center gap-2">
        <p><AiOutlineSearch /></p>
        <input className="w-[90px] md:w-[500px] border-b-2 outline-none" type="text"  placeholder="search here" />
      </div>

      <div className="flex items-center justify-center gap-2">
       {user? <h2><Link to="/write">Write</Link></h2> : <h2><Link to="/login">Login</Link></h2>} 
       {user? <h2><Link to="/profile">Profile</Link></h2> : <h2><Link to="/Register">Register</Link></h2>} 
      
        
      </div>
    </div>
  )
}

export default Navbar
