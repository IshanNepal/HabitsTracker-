import { Phone, Play, PlayIcon } from 'lucide-react'
import React from 'react'

const SummaryBar = () => {
  return (
    <div className="Bar flex flex-col items-center bg-base-100 rounded-md gap-6 p-4">
        <div className="Main flex flex-col gap-2 text-lg">
            <h1 className='text-2xl font-bold text-center'>Hello Ishan!</h1>
            <div className="Info flex flex-col text-center gap-1">
                <span>You Have 4 Total Habits.</span>
                <span>Maintained Habits: 1</span>
                <span>UnMaintained Habits: 3</span>
                <span>Improtant: 2</span>
                <span>Mid Important :2</span>
                <span>UnImportant: None</span>
                <span>3 Hobbies</span>
            </div>
        </div>
        <div className="Others flex flex-col items-center gap-2">
            <button className='flex p-2 rounded-md bg-accent-content text-base-100 cursor-pointer hover:scale-102 transistion-transform duration-200'>
                <PlayIcon />
                <span>Summarize with AI</span>
            </button>
            <button className='flex p-1.5 rounded-md outline-3 cursor-pointer hover:scale-102 transistion-transform duration-200 '>
                <Phone />
                <span>Contact a Specialist </span>
            </button>
        </div>
    </div>
  )
}

export default SummaryBar