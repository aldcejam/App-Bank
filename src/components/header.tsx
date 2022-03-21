import { UseAndModifierInformations } from "../contexts/headerContext";
import { PersonAutentication } from "./person";
import { useSession, signIn } from "next-auth/react";


export function Header() {
    const { data: session, status } = useSession()

    /* ======== Header informations ======== */
    const { details, headerTitle } = UseAndModifierInformations();
    const personImage = session?.user?.image;

    /* ======== Header situation ======== */
    const situation = status == "authenticated" ? true : false;

    return details ? (
        <header onClick={() => signIn()} className="z-50 bg-primary py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                <span className="text-gray-500 text-xs mx-2">
                    {details}
                </span><br />
                <span className="font-bold text-2xl">
                    {headerTitle}
                </span>
            </div>
            <PersonAutentication online={situation} image={personImage} />

        </header>
    ) : (
        <header className="z-50 bg-primary  py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                <span className="font-bold text-2xl">
                    {headerTitle}
                </span>
            </div>
            <PersonAutentication online={situation} image={personImage}/>

        </header>
    )
}