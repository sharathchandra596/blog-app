

function UserPost() {
  return (
    <div className='w-full max-h-[100px] flex justify-center md:px-[100px] px-[10px] gap-2 md:gap-5 md:max-h-[200px] md:min-h-[100px] mb-8 '>
        {/* Left */}
        <div className=' w-[35%]'>
            <img className='w-[100%] h-[100%] rounded object-fill' src="https://images.unsplash.com/photo-1593349480506-8433634cdcbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        {/* Right */}
        <div className='max-w-[65%]  tracking-tighter flex-col justify-between space-y-1 px-1   overflow-hidden'>
            <h1 className='text-xs md:text-xl font-semibold '> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className='hidden md:block text-md text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatibus beatae modi facere nobis laborum soluta saepe nam, ipsa, sed fugiat iure! Quidem mollitia sequi quos eius repellat vitae debitis cumque soluta officiis distinctio. Itaque aliquid culpa quidem numquam vel saepe optio iure quia cumque sunt, eum, nemo atque. Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi numquam voluptatum rem tenetur quia, ab ea neque voluptates corrupti quas, maxime porro tempore cumque aut libero nostrum, sapiente maiores.</p>
            <div className='flex justify-between text-gray-400 text-xs py-2'>
                <p>@sharath</p>
                <p>26/10/2023 16:34</p>
            </div>
        </div>
      
    </div>
  )
}

export default UserPost
