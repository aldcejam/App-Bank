import { useEffect, useState } from "react"

export function Footer() {


    const [home, setHome] = useState(false)
    const [wallet, setWallet] = useState(false)
    const [money, setMoney] = useState(false)
    const [chart, setChart] = useState(false)
    const [cog, setCog] = useState(false)

    const activeEvery = (type:string)=>{
            type == "home"? (home ? setHome(false) : setHome(true),setWallet(false),setMoney(false),setChart(false),setCog(false)) : "";
            type == "wallet"? (wallet ? setWallet(false) : setWallet(true), setHome(false),setMoney(false),setChart(false),setCog(false)) : "";
            type == "money"? (money ? setMoney(false) : setMoney(true), setHome(false),setWallet(false),setChart(false),setCog(false)) : "";
            type == "chart"? (chart ? setChart(false) : setChart(true), setHome(false),setWallet(false),setMoney(false),setCog(false)) : "";
            type == "cog"? (cog ? setCog(false) : setCog(true), setHome(false),setWallet(false),setMoney(false),setChart(false)) : "";   
    }

    return (
        <div className="bg-secondary w-full max-w-md h-20 flex items-center bottom-0 fixed pt-6">
            <ul className="navegationUl">
                <li onClick={()=> activeEvery("home")} className={home ? "active" : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-estate"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("wallet")} className={wallet ? "active " : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-wallet"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("money")} className={money ? "active " : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-money-insert"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("chart")} className={chart ? "active " : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-chart-pie"></i></span>
                    </a>
                </li>
                <li onClick={()=> activeEvery("cog")} className={cog ? "active " : ""}>
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-cog"></i></span>
                    </a>
                </li>
                <div className="navegationIndicator"></div>
            </ul>
        </div>
    );
}