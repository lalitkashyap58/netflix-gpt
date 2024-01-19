import React from 'react'

const VideoTitle = ({title, overview}) => {
  return ( 
    <div className=' absolute w-[50%] aspect-video pt-[20%] px-36   text-white bg-gradient-to-r from-black   '>
    <h1 className='text-6xl font-bold '>
  {title}
    </h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div className='flex gap-4'>
    <button className='bg-white  text-black p-4 px-12 text-xl rounded-lg hover:opacity-80'>▶️ Play</button>
   
 
    <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity rounded-lg ' > ℹ️ More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;