import { UserProfileAuthenticated } from "./UserProfile";
import { useSession} from "next-auth/react";
import { MenuProfile } from "./MenuProfile";
import { useState } from "react";


interface HeaderProps{
    title: string;
    subTitle?: string;
}

export function Header({subTitle, title}:HeaderProps) {
    const { data: session, status } = useSession()

    const personImage = session?.user?.image;

    /* ======== Header situation ======== */
    const situation = status == "authenticated" ? true : false;

    
    /* onClick={() => login(situation)}  */
    const [profileMenuSituation, setProfileMenuSituation] = useState(false)
    function showOptionsUser(){
        profileMenuSituation ? setProfileMenuSituation(false): setProfileMenuSituation(true);

    }
    return (
        <header className="z-50 bg-secondary pt-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                {subTitle ?
                    <div>
                        <span className="text-gray-500 text-xs ">
                            {subTitle}
                        </span> 
                        <br />
                    </div>
                    : null
                }
                <span className="font-bold text-2xl">
                    {title}
                </span>
            </div>
            <div className="cursor-pointer" onClick={() => showOptionsUser()}>
                {situation ? <UserProfileAuthenticated image={personImage} /> : <span>login</span>}
            </div>
            <div className="absolute z-40 right-12 top-18">
                <MenuProfile isActive={profileMenuSituation} />
            </div>
        </header>
    )
}