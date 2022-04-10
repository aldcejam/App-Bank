import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}

interface creditCardDatabaseProps {
    dataOfAllCreditCards: Array<{
        color: string,
        isActive: boolean,
        occultNumberCard: string,
        id: number;
        nameAndLastName: string,
        expires: string

    }>,
    setCreditCardSelected:any
    creditCardSelected:any
}

interface creditCardSelected{
    id: number
}
const CreditCardDatabase = createContext<creditCardDatabaseProps>({} as creditCardDatabaseProps);

export const CreditCardDatabaseProvider = ({ children }: ChildrenProps) => {
    const [dataOfAllCreditCards, setDataOfAllCreditCards] = useState([])
    const [creditCardSelected,setCreditCardSelected]= useState([])

    const getDataOfAllCreditCards = async () => {
        const res = await fetch(`http://localhost:3333/Credcarddata`)
        const apiCreditCardsDataBase = await res.json()
        const ModifiedDataOfCreditCards = apiCreditCardsDataBase.map((CredCardData: any) => {
            return (
                {
                    id: CredCardData.id,
                    occultNumberCard: `${(CredCardData.numberCard.toString()).substring(0, 4)}`,
                    isActive: CredCardData.IsActive,
                    balance: CredCardData.balance,
                    color: CredCardData.color,
                    nameAndLastName: CredCardData.nameAndLastName,
                    expires: CredCardData.expires
                }
            )
        })
        
        setDataOfAllCreditCards(ModifiedDataOfCreditCards)
    }
    useEffect(()=>{
        getDataOfAllCreditCards()
    },[])


    return (
        <CreditCardDatabase.Provider value={{ dataOfAllCreditCards,setCreditCardSelected,creditCardSelected}}>
            {children}
        </CreditCardDatabase.Provider>
    )

}
export const DataCredCardContext = () => {
    const context = useContext(CreditCardDatabase)

    return context;
}