import { NextApiRequest, NextPage } from "next";
import { getSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { CredCard, CardAdd, CardRecipient } from "../components/cards";
import { UseAndModifierInformations } from "../contexts/headerContext";

const index: NextPage = (props) => {
    /* Header */
    const { modifierDetails,modifierHeaderTitle } = UseAndModifierInformations();

    modifierDetails("")
    modifierHeaderTitle("Send Money")

    console.log(props)

    /* true:Card, false: Bank */
    const [subPage, setSubPage] = useState(true);

    const redirectCard = () => {
        setSubPage(true)
    }
    const redirectBank = () => {
        setSubPage(false)
    }

    /* ============ Transaction ============ */

    const [transactionAmount, setTransactionAmount] = useState(Number);
    const [transactionDescription, setTransactionDescription] = useState("");


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const saveInfos = {
            amount: transactionAmount,
            description: transactionDescription
        }

        setTransactionAmount(0)
        setTransactionDescription('')
    }

    /* ======= cred card ======= */
    const numberApiCard = 32814562
    const NumberCard = ((numberApiCard).toString()).substring(4);

    /* colocar no */
    const BankBalance = 2293

    return subPage ? (

        <main>
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
                <section className="flex gap-8 overflow-y-hidden overflow-invisible overflow-inverted px-5">
                    <CardAdd />
                    <CredCard NumberCard={NumberCard} BankBalance={BankBalance} IsActive={true}/>
                    <CredCard NumberCard={NumberCard} BankBalance={BankBalance} IsActive={false}/>

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
            <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Transaction details</h4>
            <form method="post" onSubmit={handleCreateNewTransaction} className="flex justify-center flex-wrap gap-y-4 py-6">
                <fieldset className="group w-9/10 max-w-sm px-4 border-2 rounded-large border-gray-500 hover:border-constrast duration-200">
                    <legend className="ml-1 px-2 group-hover:text-constrast duration-200">Amount</legend>
                    <span className="text-gray-400 text-xl">$</span>
                    <input
                        placeholder="$"
                        className="w-9/10% max-w-sm pb-4 pt-2 px-1 border-2  bg-transparent   focus:outline-none "
                        value={transactionAmount}
                        onChange={event => Number.isNaN(Number(event.target.value)) ? "" : setTransactionAmount(Number(event.target.value)) }
                    />
                </fieldset>
                <input
                    placeholder="Description (optional)"
                    className="p-5 w-9/10 max-w-sm bg-transparent border-2 rounded-large border-gray-500 focus:outline-none"
                    value={transactionDescription}
                    onChange={event => setTransactionDescription(event.target.value)}
                />
                <br />
                <button
                    type="submit"
                    className="w-9/10 max-w-sm bg-constrast py-4 rounded-large text-secondary">
                    Confirm
                </button>

            </form>

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






