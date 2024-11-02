
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'
import UserPost from '../components/UserPost'

function ProfilePage() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col-reverse p-2 md:flex-row mt-4 justify-end items-start'>
{/* post section */}
    <div className='flex flex-col '>
    <p className='text-2xl px-5 py-2 '> Your Post :</p>
    <UserPost/>
    <UserPost/>
    <UserPost/>
    <UserPost/>
    <UserPost/>
    <UserPost/>
    </div>

    {/* user profile  */}
    <div className='md:mr-6 md:mt-4 md:p-7 md:top-0 md:sticky'>
    <h1 className='text-2xl'>User Profile :</h1>
    <div className='flex flex-col md:w-full gap-2'>
        <input className=' px-1' type="text" placeholder='Enter your name' />
        <input className=' px-1' type="email" placeholder='Enter your email' />
        <input className=' px-1' type="password" placeholder='Enter your password' />
        <div className='flex  gap-4 px-2 '>
            <button className='bg-black text-white p-1 rounded-md'>Update</button>
            <button className='bg-black text-white p-1 rounded-md'>Delete</button>
        </div>
    </div>

    </div>

    </div>
    <Fotter/>
    </>
  )
}

export default ProfilePage
