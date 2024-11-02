import  { useState } from 'react'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'
import { RxCross1 } from "react-icons/rx";

function CreatePost() {

    const [category,setCategory]=useState("")
    const [categorys,setCategorys]=useState([])
    const addCategory= ()=>
    {
        let updated_category=[...categorys]
        updated_category.push(category)
        setCategory("")
        setCategorys(updated_category)
    }

    const deleteCategory=(i)=>{
        let updated_category=[...categorys]
        updated_category.splice(i,1)
        setCategorys(updated_category)
    }

  
  return (
    <>
    <Navbar/>
    <div className='create-post px-5'>
        <h1 className='text-2xl font-semibold my-3'>Create Post:</h1>
        <form >
            {/* titel and file */}
            <div className='tile&file  flex flex-col gap-3'>
            <input className='md:w-1/2 px-2' type="text" placeholder='Enter the Title' />
            <input type="file" />
            </div>
            {/* Add categoryes */}
            <div className='flex gap-3 my-3'>
                <input value={category} onChange={(e)=> setCategory(e.target.value)} type="text" placeholder='Enter the Category' />
                <button type="button" onClick={addCategory} className='bg-slate-900 p-1 text-white'>Add</button>
            </div>
            {/* show category */}
            <div className='flex gap-2 '>
                {categorys?.map((item,i)=>(
                    <div key={i} className='bg-slate-300  flex justify-center items-center text-center p-1 rounded gap-2'>
                    <p className=''>{item}</p>
                    <p><RxCross1 onClick={()=>deleteCategory(i)} size={15} className='cursor-pointer bg-black text-white rounded-full md:mt-1 ' /></p>
                </div>
                ))}
                
                
            </div>

            <textarea className='px-1 mt-4' rows={10} cols={35} placeholder='Enter the description'/>
            <div className='text-center my-3'>
                <button  className='bg-slate-900 p-1 text-white'>Create Post</button>
            </div>
        </form>
    </div>
    <Fotter/>
    </>
  )
}

export default CreatePost
