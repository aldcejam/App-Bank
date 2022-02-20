import { useEffect, useState } from "react"

export function Footer() {


    const [iconHome, setIconHome] = useState(false)
    const [iconWallet, setIconWallet] = useState(false)
    const [iconMoney, setIconMoney] = useState(true)
    const [iconChart, setIconChart] = useState(false)
    const [iconConfig, setIconConfig] = useState(false)

    const activeEvery = (type:string)=>{
            type == "iconHome"? (iconHome ? setIconHome(false) : setIconHome(true),setIconWallet(false),setIconMoney(false),setIconChart(false),setIconConfig(false)) : "";
            type == "iconWallet"? (iconWallet ? setIconWallet(false) : setIconWallet(true), setIconHome(false),setIconMoney(false),setIconChart(false),setIconConfig(false)) : "";
            type == "iconMoney"? (iconMoney ? setIconMoney(false) : setIconMoney(true), setIconHome(false),setIconWallet(false),setIconChart(false),setIconConfig(false)) : "";
            type == "iconChart"? (iconChart ? setIconChart(false) : setIconChart(true), setIconHome(false),setIconWallet(false),setIconMoney(false),setIconConfig(false)) : "";
            type == "iconConfig"? (iconConfig ? setIconConfig(false) : setIconConfig(true), setIconHome(false),setIconWallet(false),setIconMoney(false),setIconChart(false)) : "";   
    }

    return (
        <div className="bg-secondary w-full max-w-md h-20 flex items-center bottom-0 fixed pt-6">
            <ul className="navegationUl">
                <li onClick={()=> activeEvery("iconHome")} className={iconHome ? "active home" : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-estate"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("iconWallet")} className={iconWallet ? "active wallet" : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-wallet"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("iconMoney")} className={iconMoney ? "active money" : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-money-insert"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("iconChart")} className={iconChart ? "active chart" : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-chart-pie"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("iconConfig")} className={iconConfig ? "active config" : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-cog"></i></span>
                    </a>
                </li>
                <div className="navegationIndicator"></div>
            </ul>
        </div>
    );
}