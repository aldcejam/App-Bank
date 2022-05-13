import { memo, useEffect } from "react"
import { CredCardDataContext } from "../../../contexts/CredCardsDataContext"
import { CredCardHome } from "../../Cards/CredCardHome/CredCardHome"
import style from './style.module.scss'

function SlideCredCardHomeComponent() {
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
        }, 100);

    }
    RedirectForCredCardSelected()
    return (
        <section className={style.slide}>
            {
                dataOfAllCreditCards.map((credCardData: any) => {
                    return (
                        <a
                            key={credCardData.id}
                            href={`#${credCardData.id}`}
                            id={`${credCardData.id}`}
                            className={credCardData.id == creditCardSelected ? `${style.slide__item} ${style.active}` : style.slide__item}
                            onClick={() => { SelectCreditCardToUse(credCardData.id) }}
                        >
                            <CredCardHome
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

export const SlideCredCardHome = memo(SlideCredCardHomeComponent)