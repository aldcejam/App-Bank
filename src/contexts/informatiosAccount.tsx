import { ReactNode, useContext } from "react";
import { createContext } from "react";
import { useSession, signIn, signOut, } from "next-auth/react";



/* =================================== */

interface InformationsProviderProps {
    children: ReactNode;
}

interface informationsAccountProps {
    userInforms:{
        userName: string | null | undefined
        userImage: string | null | undefined
    }
}

const informationsAccount = createContext<informationsAccountProps>({} as informationsAccountProps);

export const InformationsAccountProvider = ({ children }: InformationsProviderProps) => {
    
    const {data: session} = useSession();

    const userInforms = {
        userName: session?.user?.name,
        userImage: session?.user?.image,
    }
    
    

    return(
        <informationsAccount.Provider value={{userInforms}}>
            {children}
        </informationsAccount.Provider>
    )

}
export const UseInformationsAccount = ()=>{
    const context = useContext(informationsAccount)

    return context;
}