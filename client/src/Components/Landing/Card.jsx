import React from 'react'

const Card = ({icon, title, desc}) => {
  return (
    <div className="Card w-min-fit  bg-base-300 rounded-md p-4 flex gap-4 items-start  shadow-sm">
        <div className="Logo">
          {icon}
        </div>
        <div className="Title">
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <span>{desc}</span>
        </div>
    </div>
  )
}

export default Card