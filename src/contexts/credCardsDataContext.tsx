import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}

interface creditCardDatabaseProps {
    dataOfAllCreditCards: Array<{
        color: string,
        occultNumberCard: string,
        id: number;
        nameAndLastName: string,
        expires: string
        balance: number
    }>,
    setCreditCardSelected: any
    creditCardSelected: any
}
interface credccard {
    color: string,
    occultNumberCard: string,
    id: number,
    nameAndLastName: string,
    expires: string,
    balance: number
}

interface creditCardSelected {
    id: number
}
const CreditCardDatabase = createContext<creditCardDatabaseProps>({} as creditCardDatabaseProps);

export const CreditCardDatabaseProvider = ({ children }: ChildrenProps) => {
    const simulatorDatabaseCredCard = [
        {
            id: 1,
            balance: 3450,
            color: "card-red",
            occultNumberCard: '6784',
            nameAndLastName: "Aldcejam Junior",
            expires: "12/2029"
        },
        {
            id: 2,
            balance: 9200.50,
            occultNumberCard: '5283',
            nameAndLastName: "Martha Rebeka",
            expires: "08/2024",
            color: "card-blue",
        },
        {
            id: 3,
            balance: 200,
            occultNumberCard: '3100',
            nameAndLastName: "Picasso",
            expires: "06/2029",
            color: "card-pink",
        },
        {
            id: 4,
            balance: 45600,
            occultNumberCard: '7090',
            nameAndLastName: "Renata alabama",
            expires: "03/2029",
            color: "card-green"
        },

    ]
    const [dataOfAllCreditCards, setDataOfAllCreditCards] = useState(simulatorDatabaseCredCard)

    const [creditCardSelected, setCreditCardSelected] = useState()


    const getDataOfAllCreditCards = async () => {
        try{
            const res = await fetch(`http://localhost:3333/Credcarddata`)
            const apiCreditCardsDataBase = await res.json()
            const ModifiedDataOfCreditCards = apiCreditCardsDataBase.map((CredCardData: any) => {
                return (
                    {
                        id: CredCardData.id,
                        occultNumberCard: `${(CredCardData.numberCard.toString()).substring(0, 4)}`,
                        balance: CredCardData.balance,
                        color: CredCardData.color,
                        nameAndLastName: CredCardData.nameAndLastName,
                        expires: CredCardData.expires
                    }
                )
            })
            setDataOfAllCreditCards(ModifiedDataOfCreditCards)
            
        }catch(error){
            console.log('erro ao buscar dados' + error)
        }



    }
    useEffect(() => {
        getDataOfAllCreditCards()
    }, [])



    return (
        <CreditCardDatabase.Provider value={{ dataOfAllCreditCards, setCreditCardSelected, creditCardSelected }}>
            {children}
        </CreditCardDatabase.Provider>
    )

}
export const CredCardDataContext = () => {
    const context = useContext(CreditCardDatabase)

    return context;
}