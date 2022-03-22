import { UseAndModifierInformations } from "../contexts/headerContext";
import { PersonAutentication } from "./person";
import { useSession, signIn, signOut } from "next-auth/react";


export function Header() {
    const { data: session, status } = useSession()

    /* ======== Header informations ======== */
    const { details, headerTitle } = UseAndModifierInformations();
    const personImage = session?.user?.image;

    /* ======== Header situation ======== */
    const situation = status == "authenticated" ? true : false;

    function login(situation: boolean){
        if(situation){
            signOut()
        }else{
            signIn()
        }
    }
    return (
        <header onClick={() => login(situation)}  className="z-50 bg-primary py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
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
            {situation ? <PersonAutentication online={situation} image={personImage} /> : <span>login</span>}

        </header>
    )
}