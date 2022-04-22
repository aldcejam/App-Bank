import { memo, useEffect } from "react";
import { CredCardDataContext } from "../contexts/CredCardsDataContext";
import { CardAdd, CredCardIndex, CredCardSlide } from "./cards";

function SlideCredCardsIndexComponent() {
    const { dataOfAllCreditCards, setCreditCardSelected, creditCardSelected } = CredCardDataContext()

    useEffect(() => {
        const storagedCredCardSelected = localStorage.getItem('@CredCardSelected')
        setCreditCardSelected(storagedCredCardSelected)
    }, [])

    const SelectCreditCardToUse = (credCardId: number) => {
        setCreditCardSelected(credCardId)
        localStorage.setItem('@CredCardSelected', JSON.stringify(credCardId))
    }
    const RedirectForCredCardSelected = () => {
        setTimeout(() => {
            window.location.href = `#${creditCardSelected}`
        }, 50);

    }
    RedirectForCredCardSelected()
    return (
        <>
            <h4 className="text-gray-500 text-sm mx-6 my-2">select credit card</h4>
            <section className="slide overflow-inverted">
                <CardAdd />
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
export const SlideCredCardsIndex = memo(SlideCredCardsIndexComponent)


function SlideCredCardsHomeComponent() {
    const { dataOfAllCreditCards, setCreditCardSelected, creditCardSelected } = CredCardDataContext()

    useEffect(() => {
        const storagedCredCardSelected = localStorage.getItem('@CredCardSelected')
        setCreditCardSelected(storagedCredCardSelected)
    }, [])

    const SelectCreditCardToUse = (credCardId: number) => {
        setCreditCardSelected(credCardId)
        localStorage.setItem('@CredCardSelected', JSON.stringify(credCardId))
    }
    const RedirectForCredCardSelected = () => {
        setTimeout(() => {
            window.location.href = `#${creditCardSelected}`
        }, 200);

    }
    RedirectForCredCardSelected()
    return (
        <section className='slide'>
            {
                dataOfAllCreditCards.map((credCardData: any) => {
                    return (
                        <a
                            key={credCardData.id}
                            href={`#${credCardData.id}`}
                            id={`${credCardData.id}`}
                            className={credCardData.id == creditCardSelected ? 'slide__item active' : "slide__item"}
                            onClick={() => { SelectCreditCardToUse(credCardData.id) }}
                        >
                            <CredCardSlide
                                color={`${credCardData.color}`}
                                numberCard={credCardData.occultNumberCard}
                                nameAndLastName={credCardData.nameAndLastName}
                                expires={credCardData.expires}
                            />
                        </a>
                    )
                }
                )
            }
        </section>
    )
}

export const SlideCredCardsHome = memo(SlideCredCardsHomeComponent)