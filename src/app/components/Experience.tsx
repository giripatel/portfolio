import React from 'react'
import ExperienceModel from './ExperienceModel'

const Experience = () => {
  return (
    <section id="experience">
      <div className='w-full flex justify-center font-semibold text-lg text-white p-4'><span className='text-yellow-500'>Work</span>:<span className='text-red-400'>Experience</span></div>
      <div className='w-full flex justify-center mt-5'>
        <div className='flex justify-center flex-col gap-y-16'>
            <ExperienceModel />
            <ExperienceModel />
            <ExperienceModel />
            {/* <ExperienceModel /> */}
            {/* <ExperienceModel /> */}
            {/* <div className='w-20 h-20 bg-red-300'></div> */}
        </div>
      </div>
    </section>
  )
}

export default Experience
