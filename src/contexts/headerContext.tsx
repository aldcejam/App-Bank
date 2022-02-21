import { createContext, ReactNode, useContext, useState } from "react";

interface InformationsProviderProps {
    children: ReactNode;
}

interface InformationsHeaderProps {
    mainInformation: string;
    details: string;
    modifierDetails: (modDetails: string) => void;
    modifierMainInformation: (modInfo: string) => void;
}

const InformationsHeader = createContext<InformationsHeaderProps>({} as InformationsHeaderProps);

export const InformationsProvider = ({ children }: InformationsProviderProps) => {
    const [details, setDatails] = useState("");
    const [mainInformation, setMainInformation] = useState("");

    async function modifierDetails(modDetails: string) {
        setDatails(modDetails)
    }
    async function modifierMainInformation(modInfo: string) {
        setMainInformation(modInfo)
    }

    return(
        <InformationsHeader.Provider value={{details,mainInformation,modifierDetails, modifierMainInformation}}>
            {children}
        </InformationsHeader.Provider>
    )

}
export const UseAndModifierInformations = ()=>{
    const context = useContext(InformationsHeader)

    return context;
}