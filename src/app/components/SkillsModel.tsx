import React from 'react'

const SkillsModel = ({skill} :{skill: string}) => {
  return (
    // <div>
    //   <div className='text-slate-100 rounded-md w-fit px-4 py-2 border shadow-[4px_4px_0px_g] font-semibold'>{skill}</div>
    // </div>

    <div>
      <div className="relative">
  <div
    className="absolute -inset-0 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"
  ></div>
  <div
    className="relative flex h-10 w-fit px-8 items-center justify-center rounded-lg bg-slate-900 text-slate-300"
  >
    {skill}
  </div>
</div>

    </div>
  )
}

export default SkillsModel
