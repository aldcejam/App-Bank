import { NextPage } from "next";
import React, {  useState } from "react";
import { CardForFriends } from "../components/Cards/CardForFriends";
import { SlideCredCardIndex } from "../components/CredCardSlides/IndexCredCardSlide/IndexCredCardSlide";
import { FormTransaction } from "../components/FormTransaction/FormTransactions";
import { Header } from "../components/Header/Header";


const index: NextPage = () => {

    /* true:Card, false: Bank */
    const [subPage, setSubPage] = useState(true);

    const redirectCard = () => {
        setSubPage(true)
    }
    const redirectBank = () => {
        setSubPage(false)
    }


    return (


        <>
            <Header title='Send Money' />
            <div className="border-gray-300 border-solid border-b-2 pb-1 grid grid-cols-2 text-center text-xl text-gray-500">
                <div onClick={redirectCard} className="cursor-pointer" id="Card">
                    <span className={subPage ?'border-orange-cp border-solid border-b-2 px-8 pb-1' : ''}>Card</span>
                </div>
                <div onClick={redirectBank} className="cursor-pointer" id="bank">
                    <span className={!subPage ?'border-orange-cp border-solid border-b-2 px-8 pb-1' : ''}>Bank</span>
                </div>
            </div> 
            {subPage ?

                <main>

                    <section className="py-8 overflow-y-scroll overflow-x-hidden beautiful-scroll">
                        {/* =========================== Slide Credit Card =========================== */}
                        <SlideCredCardIndex />
                        {/* =========================== Recipient =========================== */}
                        <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Recipient</h4>
                        <section className="flex gap-8 overflow-y-hidden overflow-invisible overflow-inverted px-5">
                            <CardForFriends isActive={false} RecipientImage={'https://github.com/claudsondouglas.png'} />
                            <CardForFriends isActive={true} RecipientImage={'https://github.com/ryanizac.png'} />
                            <CardForFriends isActive={false} RecipientImage={'https://github.com/aldcejam.png'} />
                        </section>
                    </section>

                    {/* =========================== Transaction =========================== */}
                    <FormTransaction />

                </main>
                :
                <main>
                    oalslald
                </main>
                }
        </>




    )
}
export default index;






