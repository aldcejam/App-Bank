import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}

interface creditCardDatabaseProps {
    dataOfAllCreditCards: Array<{
        color: string,
        IsActive: boolean,
        NumberCard: string,
        id: number;
        nameAndLastName: string,

    }>
}

const creditCardDatabase = createContext<creditCardDatabaseProps>({} as creditCardDatabaseProps);

export const creditCardDatabaseProvider = ({ children }: ChildrenProps) => {
    const [dataOfAllCreditCards, setDataOfAllCreditCards] = useState([])

    const getDataOfAllCreditCards = async () => {
        const res = await fetch(`http://localhost:3333/Credcarddata`)
        const apiCreditCardsDataBase = await res.json()
        const ModifiedDataOfCreditCards = apiCreditCardsDataBase.map((CredCardData: any) => {
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
    useEffect(()=>{
        getDataOfAllCreditCards()
    },[])


    return (
        <creditCardDatabase.Provider value={{ dataOfAllCreditCards }}>
            {children}
        </creditCardDatabase.Provider>
    )

}
export const dataOfAllCreditCardsContext = () => {
    const context = useContext(creditCardDatabase)

    return context;
}