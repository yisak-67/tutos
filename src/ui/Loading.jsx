import React from 'react'

function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center bg-black absolute top-0 left-0 flex-col'>
<TailSpin
  visible={true}
  
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
<p className='text-white text-2xl font-bold tracking-widest'>Loading...</p>

    </div>
  )
}

export default Loading