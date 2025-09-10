import HabitsCard from '../Components/HabitsCard'
import SummaryBar from '../Components/SummaryBar'
import MyBarChart from '../Components/DashboardGraph'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { HatGlasses, Plus } from 'lucide-react'

const HomePage = () => {
  const [Habits, setHabits] = useState([]);
  const handleFetch = async() => {
    try{
      const res = await fetch ('http://127.0.0.1:5000/api/app/get-all-habits');

      if(!res.ok) {
        console.log(res)
        return toast.error("Error in Response!")
      }

      const data = await res?.json()
      if (data) {
        const habits = data.habits;
        setHabits(habits)
        toast.success('Fetching Data Successfull!')
        console.log(habits)
      }
      
    }
    catch (e) {
      console.log('errror while fetching!', e)
      toast.error('Error While Fetching Data!')
    }
  }

  useEffect (() => {
    handleFetch()
  },[])
  return (
    <main className='bg-base-300 w-full h-full sm:h-screen p-1.5 overflow-x-hidden overflow-y-auto'>
      <section className='grid grid-cols-3 gap-2'>
        <div className="p-4 rounded-md bg-base-100 sm:col-span-2 col-span-3 ">
          <div className="Title flex justify-between items-center p-2 whitespace-nowrap gap-2 flex-wrap">
          <span className='text-2xl font-semibold m-2'>All Habits ⌚</span>
          <input 
          placeholder='Search Habits by Title'
          className=' p-1.5 bg-base-300 rounded-md outline-none w-1/2 hidden md:block'
          type="text" />
          <button className='bg-base-200 p-1.5 rounded-lg border-2 hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:bg-primary'>
            <Plus />
          </button>
          <div className="Actions flex gap-2 justify-center items-center">
            <button>
              <span>Filter ➕</span>
            </button>
            <button>
              <span>Sort 📂</span>
            </button>
          </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
          {Habits.map((habit) => (
            <HabitsCard
            created_at={habit.created_at}
            imp={habit.importance}
            performance={habit.streak}
            is_hobby={habit.is_hobby}
            title={habit.title}/>
          ))}
          </div>
        </div>
        <div className="SummaryBar col-span-3 sm:col-span-1">
          <SummaryBar />
        </div>
      </section>
      <div className="section bg-base-100 my-2 rounded-md p-4">
          <MyBarChart />
      </div>
    </main>
  )
}

export default HomePage