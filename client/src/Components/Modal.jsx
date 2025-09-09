import { Plus } from "lucide-react"

const Modal = ({children, handleToggleModal}) => {
  return (
    <div className="Container fixed inset-0 bg-black/25 flex items-center justify-center z-50">
        <div className="Modal bg-base-100 p-6 rounded-lg shadow-lg relative">
            <button className="action absolute left-95 font-bold" onClick={handleToggleModal}>
                <Plus className="rotate-45"/>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal