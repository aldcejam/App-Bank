import { NextApiRequest, NextPage } from "next";
import { getSession } from "next-auth/react";
import React, { FormEvent, useEffect, useState } from "react";
import { CredCardIndex, CardAdd, CardRecipient } from "../components/cards";
import { FormTransaction } from "../components/FormTransactions";
import { UseAndModifierInformationsHeader } from "../Contexts/headerContext";
import { DataCredCardContext } from "../Contexts/slideOfCreditCard";

const index: NextPage = () => {
    /* ================================================== */
    /* ===================== Header ===================== */
    /* ================================================== */
    const { modifierDetails, modifierHeaderTitle } = UseAndModifierInformationsHeader();
    modifierDetails("")
    modifierHeaderTitle("Send Money")

    /* ===================================================== */
    /* ===================== cred card ===================== */
    /* ===================================================== */
    const { dataOfAllCreditCards, setCreditCardSelected, creditCardSelected } = DataCredCardContext()
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
        }, 1000);

    }




    /* true:Card, false: Bank */
    const [subPage, setSubPage] = useState(true);

    const redirectCard = () => {
        setSubPage(true)
    }
    const redirectBank = () => {
        setSubPage(false)
    }


    return subPage ? (

        <main onLoad={RedirectForCredCardSelected}>
            <div className="border-gray-300 border-solid border-b-2 pb-1 grid grid-cols-2 text-center text-xl text-gray-500">
                <div >
                    <span className="border-orange-cp border-solid border-b-2 px-8 pb-1">Card</span>
                </div>
                <div onClick={redirectBank} className="cursor-pointer">
                    <span>Bank</span>
                </div>
            </div>

            <section className="py-8 overflow-y-scroll overflow-x-hidden beautiful-scroll">
                {/* =========================== select credit card =========================== */}
                <h4 className="text-gray-500 text-sm mx-6 my-2">select credit card</h4>
                <section className="slide overflow-inverted">
                    <CardAdd />
                    {dataOfAllCreditCards.map((dataCredCard) => {
                        return (
                            <a
                                key={dataCredCard.id}
                                onClick={() => { SelectCreditCardToUse(dataCredCard.id) }}
                                href={`#${dataCredCard.id}`}
                                id={`${dataCredCard.id}`}
                                className={dataCredCard.id == creditCardSelected ? 'slide__item bg-constrast rounded-lg transition-colors duration-500' : "slide__item"}
                            >
                                <CredCardIndex
                                    balance={dataCredCard.balance}
                                    cardNumber={dataCredCard.occultNumberCard}
                                />
                            </a>
                        )
                    })}

                </section>

                {/* =========================== Recipient =========================== */}
                <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Recipient</h4>
                <section className="flex gap-8 overflow-y-hidden overflow-invisible overflow-inverted px-5">
                    <CardRecipient isActive={false} RecipientImage={'https://github.com/claudsondouglas.png'} />
                    <CardRecipient isActive={true} RecipientImage={'https://github.com/ryanizac.png'} />
                    <CardRecipient isActive={false} RecipientImage={'https://github.com/aldcejam.png'} />
                </section>
            </section>

            {/* =========================== Transaction =========================== */}
            <FormTransaction/>

        </main>

    ) : (
        <main>
            <div className=" border-gray-300 border-solid border-b-2 pb-1 grid grid-cols-2 text-center text-xl text-gray-500">
                <div onClick={redirectCard} className="cursor-pointer">
                    <span>Card</span>
                </div>
                <div>
                    <span className="border-orange-cp border-solid border-b-2 px-8 pb-1">Bank</span>
                </div>
            </div>
        </main>

    );
}
export default index;






