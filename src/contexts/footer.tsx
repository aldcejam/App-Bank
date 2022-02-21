import { createContext, ReactNode, useState, useContext } from "react";

interface SelectIconsFooterProviderProps {
    children: ReactNode;
}

interface SelectIconsFooterProps {
    ActiveIcons: (iconActive: string) => void;
    Verify: (iconFixed: string) => void;
    iconHome: boolean;
    iconWallet: boolean;
    iconMoney: boolean;
    iconChart: boolean;
    iconConfig: boolean;
}

const SelectIconsFooter = createContext<SelectIconsFooterProps>({} as SelectIconsFooterProps);

export const SelectIconsFooterProvider = ({ children }: SelectIconsFooterProviderProps) => {

    const [iconHome, setIconHome] = useState(false)
    const [iconWallet, setIconWallet] = useState(false)
    const [iconMoney, setIconMoney] = useState(true)
    const [iconChart, setIconChart] = useState(false)
    const [iconConfig, setIconConfig] = useState(false)

    const ActiveIcons = (iconActive: string) => {

            iconActive == "iconHome" ? (iconHome ? setIconHome(false) : setIconHome(true), setIconWallet(false), setIconMoney(false), setIconChart(false), setIconConfig(false), iconActive ="",) : "";
            iconActive == "iconWallet" ? (iconWallet ? setIconWallet(false) : setIconWallet(true), setIconHome(false), setIconMoney(false), setIconChart(false), setIconConfig(false)) : "";
            iconActive == "iconMoney" ? (iconMoney ? setIconMoney(false) : setIconMoney(true), setIconHome(false), setIconWallet(false), setIconChart(false), setIconConfig(false)) : "";
            iconActive == "iconChart" ? (iconChart ? setIconChart(false) : setIconChart(true), setIconHome(false), setIconWallet(false), setIconMoney(false), setIconConfig(false)) : "";
            iconActive == "iconConfig" ? (iconConfig ? setIconConfig(false) : setIconConfig(true), setIconHome(false), setIconWallet(false), setIconMoney(false), setIconChart(false)) : "";
        }

    }

    return (
        <SelectIconsFooter.Provider value={{iconHome, iconWallet,iconMoney,iconChart,iconConfig,ActiveIcons,Verify}}>
            {children}
        </SelectIconsFooter.Provider>
        )
}
export function use(){

    const context = useContext(SelectIconsFooter);

    return context;
}
