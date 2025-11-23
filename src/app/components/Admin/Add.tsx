import { useState } from "react"
import { GrClose } from "react-icons/gr"
import Input from "../Input"

export default function AddAdmin() {
  const [showModal, setShowModal] = useState(false)
  const changeModalState = () => {
    const newValue = !showModal
    setShowModal(newValue)
  }
  return (
    <div>
      <button onClick={changeModalState} className="bg-primary border border-primary text-white rounded px-3 py-2">+ Add Administrator</button>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-5 md:p-0
        transition-all duration-300
        ${showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          onClick={changeModalState}
          className={`absolute inset-0 bg-black/50
          transition-opacity duration-300
          ${showModal ? "opacity-100" : "opacity-0"}`}
        />

        {/* Popup box */}
        <div
          className={`w-full max-w-lg relative z-10 bg-white rounded-xl p-5 shadow-xl
          transform transition-all duration-300
          ${showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Add Admin</h2>
            <button className="cursor-pointer">
              <GrClose size={16}/>
            </button>
          </div>
          <form className="mt-5 flex flex-col gap-3">
            <Input
              label="name"
              placeholder="Admin name" />
            <Input
              label="email"
              placeholder="Admin email" />
            <div className="w-full flex justify-end gap-3 mt-3">
              <button
                onClick={changeModalState}
                type="button"
                className="w-full bg-white border border-line rounded-full py-2">
                Cancel
              </button>
              <button
                type="submit"
                className="w-full bg-primary text-white border border-primary rounded-full py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}