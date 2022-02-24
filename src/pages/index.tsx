import { NextPage } from "next";
import React, { useState } from "react";
import { Card, CardAdd } from "../components/cards";
import { UseAndModifierInformations } from "../contexts/headerContext";
import ReactDOM from 'react-dom'

const index: NextPage = () => {

    /* Header */
    const { modifierDetails } = UseAndModifierInformations();
    const { modifierMainInformation } = UseAndModifierInformations();

    modifierDetails("")
    modifierMainInformation("Send Money")


    /* true:Card, false: Bank */
    const [subPage, setSubPage] = useState(true);

    const redirectCard = () => {
        setSubPage(true)
    }
    const redirectBank = () => {
        setSubPage(false)
    }
    /* ======= cred card ======= */
    const numberApiCard = 32814562
    const NumberCard = ((numberApiCard).toString()).substring(4);

    /* colocar no */
    const SaodoBancario = 2293

    return subPage ? (
        <>
            <main id="colq">
                <div className="border-gray-300 border-solid border-b-2 pb-1 grid grid-cols-2 text-center text-xl text-gray-500">
                    <div >
                        <span className="border-orange-cp border-solid border-b-2 px-8 pb-1">Card</span>
                    </div>
                    <div onClick={redirectBank} className="cursor-pointer">
                        <span>Bank</span>
                    </div>
                </div>

                <section className="py-8 overflow-y-scroll overflow-x-hidden beautiful-scroll">
                    <h4 className="text-gray-500 text-sm mx-6 my-2">select credit card</h4>
                    <section className="flex gap-8 overflow-y-hidden overflow-invisible overflow-inverted px-5">
                        <CardAdd />
                        <Card NumberCard={NumberCard} SaodoBancario={SaodoBancario} isActive={true} />
                        <Card NumberCard={NumberCard} SaodoBancario={SaodoBancario} isActive={false} />


                    </section>

                    <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Recipient</h4>
                    <section className="flex gap-8 overflow-y-hidden overflow-invisible overflow-inverted px-5">

                    </section>
                </section>
            </main>
        </>
    ) : (
        <>
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
        </>

    );
}

export default index;






