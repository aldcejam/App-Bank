import { memo } from "react";
import { IoLogoVk } from "react-icons/io";

interface CredCardSlideProps {
    numberCard: string;
    color: string;
    nameAndLastName: string
    expires: string
}

function CredCardHomeComponents({ numberCard, color, nameAndLastName, expires }: CredCardSlideProps) {
    const title = "text-xs msm:text-base text-secondary"
    const text = "text-sm msm:text-lg text-primary"


    return (
        <div className={`${color} relative w-[65vw] max-w-[320px] min-w-[230px] h-[44vw] min-h-[160px] max-h-52 rounded-md shadow-md text-lg py-3 px-4`}>
            <IoLogoVk className=" text-3xl" />
            <div className="absolute top-[40%] left-5 z-30 tracking-[0.2rem] text-gray-100 text-base ssm:text-lg msm:text-xl msm:tracking-[0.3rem]">
                <span>****  ****  **** {numberCard}</span>
            </div>
            <div className="absolute bottom-4 left-5 leading-6 z-30">
                <h4 className={title}>Card holder</h4>
                <span className={text}>{nameAndLastName}</span>
            </div>
            <div className="absolute right-5 bottom-4 z-30 text-right leading-6">
                <h4 className={title}>Expires</h4>
                <p className={text}>{expires}</p>
            </div>
            <img className='absolute bottom-0 left-0' src="wave.svg" alt="sas" />
        </div>

    )
}
export const CredCardHome = memo(CredCardHomeComponents)