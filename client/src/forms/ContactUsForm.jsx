import { Goal, CatIcon, Plus } from "lucide-react"

const ContactUsForm = () => {
  return (
    <>
    <div className="Container flex flex-col bg-base-300 w-full p-6 rounded-lg items-center justify-center shadow-md">
        <div className="Main flex flex-col gap-6 ">
            <div className="Title text-xl text-center">
                <h1 className='text-2xl font-bold '>Contact Us ☎️</h1>
                <span>Track Your Habits 🧭</span>
            </div>
            <div className="Form flex flex-col gap-3 text-xl font-bold items-start p-2 w-full">
                <div className="UserName">
                    <label htmlFor="username">Username: 👤</label>
                    <input 
                    type="text" 
                    placeholder='Enter Your UserName!' 
                    className='bg-base-200 rounded-md p-2 outline-none w-full text-lg font-semibold'/>
                </div>
                <div className="Password">
                    <label htmlFor="Password">Password: 🔑</label>
                    <input 
                    type="password" 
                    placeholder='Enter yourPassword Password' 
                    className='bg-base-200 rounded-md p-2 outline-none w-full text-lg font-semibold'
                    />
                </div>
            </div>
        </div>
        <div className="Others flex flex-col w-full sm:w-[22rem]">
            <div className="Actions flex flex-col gap-2">
            <button className="flex  border-2  p-2 items-center rounded-md font-bold w-full justify-center gap-2 hover:bg-secondary transition-colors duration-200 cursor-pointer" >
                <Plus size={20}/>
                <span>Sumbit</span>
            </button>
            <button className="flex text-white bg-accent-content p-2 items-center rounded-md font-bold w-full justify-center gap-2 hover:bg-primary transition-colors duration-200 cursor-pointer">
                <Plus className='rotate-45' size={20} />
                <span>Cancel</span>
            </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUsForm