/* eslint-disable react/prop-types */


function Menu({user}) {
    
  return (
    <div className="bg-stone-900 w-[100px] flex flex-col items-start absolute top-10 right-2 rounded-md py-2 px-1">
     {!user &&<h3 className="text-gray-200 text- cursor-pointer hover:text-gray-500 space-y-2">Login</h3>} 
     {!user &&<h3 className="text-gray-200 text- cursor-pointer hover:text-gray-500 space-y-2">Register</h3>} 
     {user &&<h3 className="text-gray-200 text- cursor-pointer hover:text-gray-500 space-y-2">Profile</h3>} 
     {user &&<h3 className="text-gray-200 text- cursor-pointer hover:text-gray-500 space-y-2">Write</h3>} 
     {user &&<h3 className="text-gray-200 text- cursor-pointer hover:text-gray-500 space-y-2">My Blogs</h3>} 
     {user &&<h3 className="text-gray-200 text- cursor-pointer hover:text-gray-500 space-y-2">Logout</h3>} 
      
    </div>
  )
}

export default Menu
