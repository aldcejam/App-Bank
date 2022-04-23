import { memo } from "react";
import { IoLogoVk } from "react-icons/io5";

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