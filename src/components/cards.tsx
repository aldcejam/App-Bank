import { IoIosAddCircle, IoLogoVk } from "react-icons/io"
import { PersonCard } from "./person";

/* ================== credit card ================== */
interface CredCardProps {
    NumberCard: string;
    BankBalance: number;
    IsActive: boolean;
}
export function CredCard({ NumberCard, BankBalance, IsActive }: CredCardProps) {
    const situationCredCard = IsActive ? "bg-constrast" : "bg-gray-300";
    return (
        <div className={`${situationCredCard} w-5/6 min-w-56 h-40 rounded-lg shadow-md text-lg relative p-3`} >
            <div className="w-full h-full absolute" />
            <IoLogoVk className="float-left text-3xl" />
            <span className="absolute bottom-16 right-10 text-2xl text-gray-100">
                {NumberCard} <span className="mr-3">****</span>
            </span>
            <span className="absolute bottom-2 left-3 text-gray-500">
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(BankBalance)}
            </span>

        </div>
    )
}


/* ================== card Friends ================== */

interface CardRecipientProps {
    isActive: boolean;
    RecipientImage: string;
}
export function CardRecipient({ isActive, RecipientImage }: CardRecipientProps) {
    const colorCard = isActive ? "bg-constrast" : "bg-gray-300";
    return(
        <div className={`${colorCard} w-5/6 min-w-52 max-w-16 h-40 rounded-lg shadow-md text-lg text-center p-3  flex items-center justify-center`}>
            <div className="">
                <PersonCard image={RecipientImage}  />
                <p>sjsj</p>
            </div>
        </div>
    )
}

/* ================== add card ================== */
export function CardAdd() {
    return (
        <div className="border-gray-300 relative w-5/6 min-w-56 h-40 text-lg rounded-lg border-dashed shadow-md border-2">
            <div className="w-full h-full absolute" />
            <IoIosAddCircle className="text-green-cp text-6xl mr-7/20 mt-4" />
            <p className="text-center text-gray-500">new <br /> cred card</p>
        </div>
    )
}


/* ================== config cards ================== */
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