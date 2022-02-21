import { NextPage } from "next";
import { useState } from "react";
import { Header } from "../components/header";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Money: NextPage = () => {

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
    const credCard = Math.floor(Math.random() * 1999) + 999;
    return subPage ? (
        <>
            <main className="overflow-y-scroll">
                <div className="border-gray-300 border-solid border-b-2 pb-1 grid grid-cols-2 text-center text-xl text-gray-500">
                    <div >
                        <span className="border-orange-cp border-solid border-b-2 px-8 pb-1">Card</span>
                    </div>
                    <div onClick={redirectBank} className="cursor-pointer">
                        <span>Bank</span>
                    </div>
                </div>

                <section className="py-8">
                    <h4 className="text-gray-500 text-sm mx-6 my-2">select credit card</h4>
                    <section className="flex gap-8 overflow-invisible overflow-inverted px-5">

                        <div className="card">
                            <div className="w-full h-full absolute" />
                            {credCard}
                        </div>
                        <div className="card">
                            <div className="w-full h-full absolute" />
                        </div>
                        <div className="card">
                            <div className="w-full h-full absolute " />
                        </div>
                    </section>

                    <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Recipient</h4>
                    <section className="flex gap-8 overflow-invisible overflow-inverted px-5">
                        <div className="card">
                            {credCard}
                        </div>
                        <div className="card">

                        </div>
                        <div className="card">

                        </div>
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

export default Money;






