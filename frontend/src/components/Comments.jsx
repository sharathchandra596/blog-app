
import { MdDelete, MdEditNote } from 'react-icons/md'

function Comments() {
  return (
    <div className="my-2 comments-section">
    <div className="bg-gray-300 p-2 md:mx-16 rounded-md">
      <div className="flex justify-between text-sm text-gray-500 font-light mt-1 mb-1">
        <p>@sharath</p>
        <p>13/2/3022 16:23</p>
        <div className="flex gap-2">
       <p  className="text-lg cursor-pointer text-black"><MdEditNote /></p> 
       <p  className="text-lg cursor-pointer text-black"><MdDelete /></p> 
        </div>
      </div>

      <p className="text-sm text-gray-500 font-light mt-1 mb-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus optio non qui reprehenderit a, modi sint reiciendis, </p>
    </div>
  </div>
  )
}

export default Comments
