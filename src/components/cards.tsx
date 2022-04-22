import { memo } from "react";
import { IoIosAddCircle, IoLogoVk } from "react-icons/io"
import { UserProfileForCard } from "./UserProfile";

/* ================================================= */
/* ================== credit card ================== */
/* ================================================= */


interface CredCardProps {
    cardNumber: string;
    balance: number;
}

function CredCardIndexComponents({ cardNumber, balance }: CredCardProps) {
    return (
        <div className={`w-5/6 min-w-56 h-40 rounded-lg shadow-md text-lg relative p-3`} >
            <div className="w-full h-full absolute" />
            <IoLogoVk className="float-left text-3xl" />
            <span className="absolute bottom-16 right-10 text-2xl text-gray-100">
                {cardNumber} <span className="mr-3">****</span>
            </span>
            <span className="absolute bottom-2 left-3 text-gray-500">
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(balance)}
            </span>
        </div>
    )
}

export const CredCardIndex = memo(CredCardIndexComponents)

/* ======================================================= */
/* ================== credit card slide ================== */
/* ======================================================= */

interface CredCardSlideProps {
    numberCard: string;
    color: string;
    nameAndLastName: string
    expires: string
}

function CredCardSlideComponents({ numberCard, color, nameAndLastName, expires }: CredCardSlideProps) {
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
export const CredCardSlide = memo(CredCardSlideComponents)

/* ================================================== */
/* ================== card Friends ================== */
/* ================================================== */

interface CardRecipientProps {
    isActive: boolean;
    RecipientImage: string;
}
function CardRecipientComponent({ isActive, RecipientImage }: CardRecipientProps) {
    const colorCard = isActive ? "bg-constrast" : "bg-gray-300";
    return (
        <div className={`${colorCard} shadow-inner w-5/6 min-w-52 max-w-16 h-40 rounded-lg text-lg text-center p-3  flex items-center justify-center`}>
            <div>
                <UserProfileForCard image={RecipientImage} />
                <p>sjsj</p>
            </div>
        </div>
    )
}

export const CardRecipient = memo(CardRecipientComponent)

/* ============================================== */
/* ================== add card ================== */
/* ============================================== */
function CardAddComponent() {
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
export const CardAdd = memo(CardAddComponent)

/* ================================================== */
/* ================== config cards ================== */
/* ================================================== */
interface CardSettingsProps {
    icon: any;
    settingName: string;
}

export function CardSettings({ icon, settingName }: CardSettingsProps) {
    return (
        <div className=" w-full h-10-screen max-h-44 rounded-lg bg-gray-100 text-center flex items-center justify-center">
            <div >
                <div className="bg-constrast rounded-full mb-1 w-14 sm:w-10 mx-auto">{icon}</div>
                <span className="sm:text-sm">{settingName}</span>
            </div>
        </div>
    );
}