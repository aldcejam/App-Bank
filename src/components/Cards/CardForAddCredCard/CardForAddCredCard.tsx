import { memo } from "react"
import { IoIosAddCircle } from "react-icons/io"

function CardForAddCredCardComponent() {
    return (
        <a href="#cardAdd" id="cardAdd" className="slide__item">
            <div className="border-gray-300 relative w-5/6 min-w-56 h-40 text-lg rounded-lg border-dashed shadow-md border-2">
                <div className="w-full h-full absolute" />
                <IoIosAddCircle className="text-green-cp text-6xl mr-7/20 mt-4" />
                <p className="text-center text-gray-500">new <br /> cred card</p>
            </div>
        </a>
    )
}
export const CardForAddCredCard = memo(CardForAddCredCardComponent)