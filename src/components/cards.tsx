import { IoIosAddCircle, IoLogoVk } from "react-icons/io"

interface CardProps {
    NumberCard: string;
    SaodoBancario: number;
    isActive: boolean;
}
export function Card({ NumberCard, SaodoBancario, isActive }: CardProps) {
    return isActive ? (
        <div className="card bg-constrast">
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
            <div className="card bg-gray-200">
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
        <div className="card border-dashed border-gray-300 border-2">
            <div className="w-full h-full absolute" />
            <IoIosAddCircle className="text-green-cp text-6xl items-center mr-card-cp-center" />
        </div>
    )
}