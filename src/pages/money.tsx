import { NextPage } from "next";
import { useState } from "react";
import { Header } from "../components/header";

const Money: NextPage = () => {

    /* true:Card, false: Bank */
    const [subPage, setSubPage] = useState(true);

    const redirectCard = () => {
        setSubPage(true)
    }
    const redirectBank = () => {
        setSubPage(false)

    }

    return subPage ? (
        <>
            <Header
                mainInformation={"Send Money"}
            />
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
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl box-shadow-cp"></div>
                        </div>
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl"></div>
                        </div>
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl"></div>
                        </div>
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl"></div>
                        </div>
                    </section>

                    <h4 className="text-gray-500 text-sm mx-6 my-2">Recipient</h4>
                    <section className="flex gap-8 overflow-invisible overflow-inverted px-5">
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl box-shadow-cp"></div>
                        </div>
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl"></div>
                        </div>
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl"></div>
                        </div>
                        <div className="pb-8">
                            <div className="bg-constrast w-5/6 min-w-48 h-36 rounded-xl"></div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    ) : (
        <>
            <Header
                mainInformation={"Send Money"}
            />
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