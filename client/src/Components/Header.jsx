import {  LayoutGrid, Plus } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex justify-between p-2 items-center border-b mx-2'>
        <div className="main">
            <div className="Title text-md">
                <h1 className='text-2xl font-semibold '>Habits Tracker</h1>
                <span>Track Your Habits 🧭.</span>
            </div>
        </div>
        <div className="Others flex gap-2 items-center">
            <nav className="hidden sm:block text-lg p-0.5 ">
                <ul className='flex gap-1.5 m-2 transition-transform duration-200'>
                    <li className='hover:font-bold cursor-pointer'>Home</li>
                    <li className='hover:font-bold  cursor-pointer'>Contact Us 📲</li>
                    <li className='hover:font-bold  cursor-pointer'>Track Habits</li>
                </ul>
            </nav>
            <button className='sm:hidden block '>
                <LayoutGrid size={40}/>
            </button>
            <button className='flex items-center bg-accent-content text-white p-2 rounded-full justify-center cursor-pointer'>
                <Plus />
                <span>Login</span>
            </button>
        </div>
    </header>
  )
}

export default Header