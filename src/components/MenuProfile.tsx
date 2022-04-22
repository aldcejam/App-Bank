import { signIn, signOut, useSession } from "next-auth/react";

interface OptionsUserProps{
    isActive: boolean;
}

export function MenuProfile({isActive}: OptionsUserProps) {
    const { data: session,status } = useSession()
    const situation = status == "authenticated" ? true : false;
    const styleButton = "bg-gray-200 text-black-cp px-2 py-1 rounded-lg"
    
    function login(situation: boolean) {
        if (situation) {
            signOut()
        } else {
            signIn()
        }
    }
    const showOptionsUser = isActive ? "opacity-1" : "opacity-0 display-disappear hidden"
    return (
        <article className={`${showOptionsUser} bg-black-cp text-secondary border-b-constrast border-r-constrast pl-4 pr-10 p-6 rounded-l-md rounded-b-md border-4 border-l-0 border-t-0 border-solid`}>
            <h3 className="px-2 text-lg">{session?.user?.name}</h3><br />
            <h4>Email: {session?.user?.email}</h4>
            <div className="text-center ml-4 pt-10">
                {situation ? 
                <button onClick={() => signOut()} className={styleButton}>Sair </button> 
                : <button onClick={() => signIn()} className={styleButton}>entrar com GitHub <i className="uil uil-github text-2xl"></i></button>}
                
            </div>
        </article>
    )
}