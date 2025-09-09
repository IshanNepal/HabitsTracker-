import React from 'react'

const PricingCard = ({icon, title, desc}) => {
  return (
    <div className="PricingCard w-min-fit  bg-base-300 rounded-md p-4 flex gap-2 items-start shadow-sm flex-col ">
        <div className="Logo text-primary">
          {icon}
        </div>
        <div className="Title flex flex-col items-start h-full">
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <div className="feature flex flex-col gap-1.5">
            {desc.map((info, idx) => (
                <span key={idx}>{info}</span>
            ))}
            </div>
        </div>
        <div className="Actions mt-2">
                <button className="bg-base-100 p-2 border-accent border-2 rounded-md ">
                    <span>Purchase</span>
                </button>
        </div>
    </div>
  )
}

export default PricingCard