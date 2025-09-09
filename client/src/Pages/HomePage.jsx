import HabitsCard from '../Components/HabitsCard'
import SummaryBar from '../Components/SummaryBar'
import MyBarChart from '../Components/DashboardGraph'
import LoginSection from '../forms/LoginSection'
import SignUpSection from '../forms/SignUpSection'

const HomePage = () => {
  return (
    <main className='bg-base-300 w-full h-full sm:h-screen p-1.5 overflow-x-hidden overflow-y-auto'>
      <section className='grid grid-cols-3 gap-1.5'>
        <div className="p-4 rounded-md bg-base-100 sm:col-span-2 col-span-3">
          <div className="Title flex justify-between items-center">
          <span className='text-2xl font-semibold m-2'>All Habits ⌚</span>
          <div className="Actions flex gap-2">
            <button>
              <span>Filter ➕</span>
            </button>
            <button>
              <span>Sort 📂</span>
            </button>
          </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
          <HabitsCard />
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