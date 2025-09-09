import React from 'react'

const HabitsCard = () => {
  return (
    <div className="Card bg-base-200 rounded-md sm:flex sm:justify-between sm: items-center p-4 shadow-sm">
        <div className="Main flex flex-col gap-10 items-start">
            <div className="Title">
                <h1 className='text-2xl font-bold'>Title</h1>
                <span className='font-extrabold'>. . . . . </span>
            </div>
            <div className="Checklist flex flex-col items-start ">
                <input type="checkbox" name="forHabitsChecklist" id="HabitsChecklist" 
                className='scale-130 '/>
                <span>
                    See more detail...
                </span>
            </div>
        </div>
        <div className="Others flex items-center gap-4 sm:flex-col sm:items-start justify-between">
            <div className="Badges flex flex-col gap-0.5">
                <span className='bg-accent w-fit px-4 rounded-full text-accent-content'>
                    Imp
                </span>
                <span className='text-lg font-bold'>
                    Maintained
                </span>
                <span className='font-semibold'>
                    Created At: 8:00 AM
                </span>
            </div>
            <div className="Status flex flex-col">
                <span>Performance: </span>
                <span>Hobby</span>
            </div>
        </div>
    </div>
  )
}

export default HabitsCard