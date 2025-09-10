
const HabitsCard = ({title, imp, maintained, created_at, performance, is_hobby}) => {
  return (
    <div className="Card bg-base-200 rounded-md sm:flex sm:justify-between sm:items-center p-4 shadow-sm font-semibold">
        <div className="Main flex flex-col gap-10 items-start">
            <div className="Title">
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
            <div className="Checklist flex flex-col items-start ">
                <input 
                type="checkbox" 
                name="forHabitsChecklist" 
                id="HabitsChecklist" 
                className='scale-130 '/>
                <span className="underline hover:scale-105 mt-4 transition-transform duration-300 cursor-pointer">
                    See more detail...
                </span>
            </div>
        </div>
        <div className="Others flex items-center gap-4 sm:flex-col sm:items-start justify-between">
            <div className="Badges flex flex-col gap-0.5">
                <span className='bg-accent w-fit px-4 rounded-full text-accent-content'>
                    {imp.toUpperCase()}
                </span>
                <span className='text-lg font-bold'>
                    {maintained}
                </span>
                <span className='font-semibold'>
                    Created At: {created_at}
                </span>
            </div>
            <div className="Status flex flex-col">
                <span>Performance: {performance}</span>
                <span>Hobby: {String(is_hobby).charAt(0).toUpperCase() + String(is_hobby).slice(1)}</span>
            </div>
        </div>
    </div>
  )
}

export default HabitsCard