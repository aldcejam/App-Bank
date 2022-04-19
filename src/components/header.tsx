import { UseAndModifierInformationsHeader } from "../Contexts/headerContext";
import { PersonAutentication } from "./person";
import { useSession, signIn, signOut } from "next-auth/react";
import { MenuUser } from "./menuUser";
import { useState } from "react";


export function Header() {
    const { data: session, status } = useSession()

    /* ======== Header informations ======== */
    const { details, headerTitle } = UseAndModifierInformationsHeader();
    const personImage = session?.user?.image;

    /* ======== Header situation ======== */
    const situation = status == "authenticated" ? true : false;

    
    /* onClick={() => login(situation)}  */
    const [isActive, setIsActive] = useState(false)
    function showOptionsUser(){
        isActive ? setIsActive(false): setIsActive(true);

    }
    return (
        <header className="z-50 bg-secondary pt-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                {details ?
                    <div>
                        <span className="text-gray-500 text-xs mx-2">
                            {details}
                        </span>
                        <br />
                    </div>
                    : ""}
                <span className="font-bold text-2xl">
                    {headerTitle}
                </span>
            </div>
            <div className="cursor-pointer" onClick={() => showOptionsUser()}>
            {situation ? <PersonAutentication image={personImage} /> : <span>login</span>}
            </div>
            <div className="absolute z-40 right-12 top-18">
                <MenuUser isActive={isActive} />
            </div>
        </header>
    )
}