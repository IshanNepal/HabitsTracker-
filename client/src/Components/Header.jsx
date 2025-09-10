import {  LayoutGrid, Plus, Sun, User } from 'lucide-react'

const Header = ({toggleLogin}) => {
  return (
    <header className='flex justify-between p-2 items-center shadow-md '>
        <div className="main">
            <div className="Title text-md">
                <h1 className='text-2xl font-semibold '>Habits Tracker</h1>
                <span>Track Your Habits 🧭.</span>
            </div>
        </div>
        <div className="Others flex gap-2 items-center">
            <nav className="hidden sm:block text-lg p-0.5 ">
                <ul className='flex gap-1.5 m-2 transition-transform duration-200 items-center'>
                    <li className='hover:font-bold cursor-pointer'>
                        Calendar
                    </li>
                    <li className='hover:scale-110 cursor-pointer'>
                        <Sun />
                    </li>
                    <li className='hover:scale-110 cursor-pointer'>
                        <User size={30}/>
                    </li>
                </ul>
            </nav>
            <button className='sm:hidden block '>
                <LayoutGrid size={40}/>
            </button>
            <button className='flex items-center bg-accent-content text-white p-2 rounded-full justify-center cursor-pointer' onClick={toggleLogin}>
                <Plus />
                <span>Login</span>
            </button>
        </div>
    </header>
  )
}

export default Header