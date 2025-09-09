import toast from 'react-hot-toast';
import Modal from '../Components/Modal'
import { Goal, CatIcon, Plus } from 'lucide-react'
import { useState } from 'react';
const LoginSection = ({handleLoginToggle, handleSignUp}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    
    const handleSumbit = async() => {
        try {
            if ((userName.trim() || password.trim()) === "") {
                return toast.error('All Fields are Required!')
            }

            if (userName.trim().length < 4 || password.trim().length < 4) {
            return toast.error("Username and password must be at least 4 characters long!");
            }

            const res = await fetch(' http://127.0.0.1:5000/api/auth/login',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username:userName, password:password })
        })

        if (!res.ok){
            console.log('Error in Res', res)
            return toast.error('Error in Response !')
        }
        const data = await res.json()
        toast.success('Sucessfully Logged in!')
        handleLoginToggle()
        console.log(data)
        }
    catch (e) {
        console.log('Error' ,e)
        toast.error('failed attempt at Logging in  user')
    }
        
    }
  return (
    <Modal handleToggleModal={handleLoginToggle}>
     <div className="Main flex flex-col gap-6 ">
            <div className="Title text-xl text-center">
                <h1 className='text-2xl font-bold '>Habits Tracker</h1>
                <span>Track Your Habits 🧭</span>
            </div>
            <div className="Form flex flex-col gap-3 text-xl font-bold items-start p-2">
                <div className="UserName">
                    <label htmlFor="username">Username: 👤</label>
                    <input 
                    type="text" 
                    placeholder='Enter Your UserName!' 
                    className='bg-base-200 rounded-md p-2 outline-none w-full text-lg font-semibold'
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="Password">
                    <label htmlFor="Password">Password: 🔑</label>
                    <input 
                    type="password" 
                    placeholder='Enter yourPassword Password' 
                    className='bg-base-200 rounded-md p-2 outline-none w-full text-lg font-semibold'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <div className="Others flex flex-col">
            <div className="Actions flex flex-col gap-2">
            <button className="flex  border-2  p-2 items-center rounded-md font-bold w-full justify-center gap-2 hover:bg-secondary transition-colors duration-200 cursor-pointer" onClick={() => handleSumbit()}>
                <Plus size={20}/>
                <span>Sumbit</span>
            </button>
            <button className="flex text-white bg-accent-content p-2 items-center rounded-md font-bold w-full justify-center gap-2 hover:bg-primary transition-colors duration-200 cursor-pointer">
                <Plus className='rotate-45' size={20} />
                <span>Cancel</span>
            </button>
            </div>
            <div className="Options flex justify-center items-center gap-4 pt-6">
                <button className='border-2 rounded-full p-2 bg-primary/45'>
                    <Goal />
                </button>
                <button className='border-2 rounded-full p-2 bg-secondary/45'>
                    <CatIcon />
                </button>
            </div>
            <span className='underline text-center flex justify-center m-2 cursor-pointer transition-transform duration-150 hover:scale-104' onClick={() => handleSignUp()}>Don't Have an Account?</span>
        </div>
    </Modal>
  )
}

export default LoginSection