import { IoIosAddCircle, IoLogoVk } from "react-icons/io"
import { IconType } from "react-icons/lib";

interface CardProps {
    NumberCard: string;
    SaodoBancario: number;
    isActive: boolean;
}
export function Card({ NumberCard, SaodoBancario, isActive }: CardProps) {
    return isActive ? (
        <div className="w-5/6 min-w-56 h-40 rounded-xl box-shadow-cp text-lg relative p-3 bg-constrast">
            <div className="w-full h-full absolute" />
            <IoLogoVk className="float-left text-3xl" />
            <span className="absolute bottom-16 right-10 text-2xl text-gray-100">
                {NumberCard} <span className="mr-3">****</span>
            </span>
            <span className="absolute bottom-2 left-3 text-gray-500">
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(SaodoBancario)}
            </span>

        </div>
    ) :
        (
            <div className="w-5/6 min-w-56 h-40 rounded-xl box-shadow-cp text-lg relative p-3 bg-gray-200">
                <div className="w-full h-full absolute" />
                <IoLogoVk className="float-left text-3xl" />
                <span className="absolute bottom-16 right-10 text-2xl text-gray-500">
                    {NumberCard} <span className="mr-3">****</span>
                </span>
                <span className="absolute bottom-2 left-3 text-gray-500">
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(SaodoBancario)}
                </span>

            </div>
        );
}
export function CardAdd() {
    return (
        <div className="w-5/6 min-w-56 h-40 rounded-xl box-shadow-cp text-lg relative p-3 border-dashed border-gray-300 border-2">
            <div className="w-full h-full absolute" />
            <IoIosAddCircle className="text-green-cp text-6xl items-center mr-card-cp-center" />
        </div>
    )
}
interface CardSettingsProps {
    icon: any;
    settingName: string;
}

export function CardSettings({ icon, settingName }: CardSettingsProps) {
    return (
        <div className=" w-full h-10-screen max-h-44 rounded-lg bg-gray-100 text-center">
            <div className="mt-1/4">
                <div className="bg-constrast rounded-full mb-1 w-14 sm:w-10 mx-auto">{icon}</div>
                <span className="sm:text-sm">{settingName}</span>
            </div>
        </div>
    );
}