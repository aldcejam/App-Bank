import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface InformationsProviderProps {
    children: ReactNode;
}

interface slideCreditCardProps {
    dataOfAllCreditCards: Array<{
        color: string,
        IsActive: boolean,
        NumberCard: string,
        id: number;
        nameAndLastName: string,

      }>
}

const creditCardsDataBase = async ()=>{

}

const SlideCreditCard = createContext<slideCreditCardProps>({} as slideCreditCardProps);

export const SlideCreditCardProvider =  ({ children }: InformationsProviderProps) => {

    const [dataOfAllCreditCards, setDataOfAllCreditCards] = useState([])

    
    const getDataOfAllCreditCards = async ()=>{
        const res = await fetch(`http://localhost:3333/Credcarddata`)
        const creditCardsDataBase = await res.json()

        const ModifiedDataOfCreditCards = creditCardsDataBase.map((CredCardData: any) => {
            return (
                {
                    id: CredCardData.id,
                    OccultNumberCard: `${(CredCardData.NumberCard.toString()).substring(0, 4)}`,
                    IsActive: CredCardData.IsActive,
                    balance: CredCardData.balance,
                    color: CredCardData.color,
                    nameAndLastName: CredCardData.nameAndLastName
                }
            )
        })
        setDataOfAllCreditCards(ModifiedDataOfCreditCards)

    }

    return (
        <SlideCreditCard.Provider value={{ dataOfAllCreditCards }}>
            {children}
        </SlideCreditCard.Provider>
    )

}
export const dataOfAllCreditCards = () => {
    const context = useContext(SlideCreditCard)

    return context;
}