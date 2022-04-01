import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface InformationsProviderProps {
    children: ReactNode;
}

interface InformationsHeaderProps {
    headerTitle: string;
    details: string;
    modifierDetails: (modDetails: string) => void;
    modifierHeaderTitle: (modInfo: string) => void;
}

const InformationsHeader = createContext<InformationsHeaderProps>({} as InformationsHeaderProps);

export const InformationsHeaderProvider = ({ children }: InformationsProviderProps) => {
    const [details, setDatails] = useState("eror");
    const [headerTitle, setHeaderTitle] = useState("eror");

    function modifierDetails(modDetails: string) {
        setDatails(modDetails)
    }
    function modifierHeaderTitle(modInfo: string) {
        setHeaderTitle(modInfo)
    }

    return (
        <InformationsHeader.Provider value={{ details, headerTitle, modifierDetails, modifierHeaderTitle }}>
            {children}
        </InformationsHeader.Provider>
    )

}
export const UseAndModifierInformations = () => {
    const context = useContext(InformationsHeader)

    return context;
}