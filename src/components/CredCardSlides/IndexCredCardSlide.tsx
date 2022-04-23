import { memo, useEffect } from "react";
import { CredCardDataContext } from "../../contexts/CredCardsDataContext";
import { CardForAddCredCard } from "../Cards/CardForAddCredCard/CardForAddCredCard";
import { CredCardIndex } from "../Cards/CredCardIndex";



function SlideCredCardIndexComponent() {
    const { dataOfAllCreditCards, setCreditCardSelected, creditCardSelected } = CredCardDataContext()

    useEffect(() => {
        const storagedCredCardSelected = localStorage.getItem('@CredCardSelected')
        setCreditCardSelected(storagedCredCardSelected)
    }, [])

    const SelectCreditCardToUse = (credCardId: number) => {
        setCreditCardSelected(credCardId)
        localStorage.setItem('@CredCardSelected', JSON.stringify(credCardId))
    }
    const RedirectForCredCardSelected= () => {
        if (creditCardSelected) {
            setTimeout(() => {
                window.location.href = `#${creditCardSelected}`
            }, 2000);
        }

    }
    RedirectForCredCardSelected()
    return (
        <>
            <h4 className="text-gray-500 text-sm mx-6 my-2">select credit card</h4>
            <section className="slide overflow-inverted">
                <CardForAddCredCard />
                {dataOfAllCreditCards.map((credCardData: any) => {
                    return (
                        <a
                            key={credCardData.id}
                            onClick={() => { SelectCreditCardToUse(credCardData.id) }}
                            href={`#${credCardData.id}`}
                            id={`${credCardData.id}`}
                            className={credCardData.id == creditCardSelected ? 'slide__item bg-constrast rounded-lg transition-colors duration-500' : "slide__item"}
                        >
                            <CredCardIndex
                                balance={credCardData.balance}
                                cardNumber={credCardData.occultNumberCard}
                            />
                        </a>
                    )
                })}

            </section>
        </>
    )
}
export const SlideCredCardIndex = memo(SlideCredCardIndexComponent)