import React, { useState } from 'react'

const Appbar = () => {
  return (
    <div className='bg-zinc-900 justify-center items-center  gap-x-9 font-semibold flex w-full h-20'>
      <div className='flex gap-x-9 w-96 rounded-xl p-5 justify-center'>
        <div className='text-slate-50 hover:cursor-pointer'>/</div>
        <div className='text-slate-50 hover:cursor-pointer'>work</div>
        <div className='text-slate-50 hover:cursor-pointer'>projects</div>
        </div>
    </div>
  )
}

export default Appbar
