import { memo, useEffect } from "react";
import { CardForAddCredCard } from "../../Cards/CardForAddCredCard/CardForAddCredCard";
import { CredCardDataContext } from "../../../contexts/CredCardsDataContext";
import { CredCardIndex } from "../../Cards/CredCardIndex/CredCardIndex";
import style from './style.module.scss'



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
            }, 100);
        }

    }
    RedirectForCredCardSelected()
    return (
        <>
            <h4 className="text-gray-500 text-sm mx-6 my-2">select credit card</h4>
            <section className={style.slide + " overflow-inverted"}>
                <CardForAddCredCard />
                {dataOfAllCreditCards.map((credCardData: any) => {
                    return (
                        <a
                            key={credCardData.id}
                            onClick={() => { SelectCreditCardToUse(credCardData.id) }}
                            href={`#${credCardData.id}`}
                            id={`${credCardData.id}`}
                            className={credCardData.id == creditCardSelected ? `${style.slide__item} ${style.active}` : style.slide__item}
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