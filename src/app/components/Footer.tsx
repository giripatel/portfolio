import React from 'react'
import ConnectonLinks from './ui/ConnectonLinks'

const Footer = () => {
  return (
    <section>
      <div className='w-full h-20 bg-neutral-950 flex justify-evenly items-center'>
        <ConnectonLinks />
        {/* <div className='text-gray-200 flex font-semibold text-lg items-center'>Made with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF0000" className="bi bi-heart-fill shadow-md shadow-red-500" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></div> */}
      </div>
    </section>
  )
}

export default Footer
