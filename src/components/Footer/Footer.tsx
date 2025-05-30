import Link from "next/link"
import {useState } from "react"
export function Footer() {

    const [iconHome, setIconHome] = useState(false)
    const [iconWallet, setIconWallet] = useState(false)
    const [iconMoney, setIconMoney] = useState(true)
    const [iconChart, setIconChart] = useState(false)
    const [iconConfig, setIconConfig] = useState(false)

    const ActiveIcons = (iconActive: string) => {
        iconActive == "iconHome" ? (iconHome ? "" : setIconHome(true), setIconWallet(false), setIconMoney(false), setIconChart(false), setIconConfig(false)) : "";
        iconActive == "iconWallet" ? (iconWallet ? "" : setIconWallet(true), setIconHome(false), setIconMoney(false), setIconChart(false), setIconConfig(false)) : "";
        iconActive == "iconMoney" ? (iconMoney ? "" : setIconMoney(true), setIconHome(false), setIconWallet(false), setIconChart(false), setIconConfig(false)) : "";
        iconActive == "iconChart" ? (iconChart ? "" : setIconChart(true), setIconHome(false), setIconWallet(false), setIconMoney(false), setIconConfig(false)) : "";
        iconActive == "iconConfig" ? (iconConfig ? "" : setIconConfig(true), setIconHome(false), setIconWallet(false), setIconMoney(false), setIconChart(false)) : "";
    }

    /* ============ styled ============ */

    const navegationUl = "text-3xl text-gray-400 flex w-full text-center justify-center"
    const navegationLi = "relative w-20 h-16 z-10";

    return (
        <div className="z-50 bg-primary w-full max-w-md h-20 flex items-center bottom-0 fixed pt-6">
            <ul className={navegationUl}>
                <li onClick={() => ActiveIcons("iconHome")} className={iconHome ? `active home text-gray-100 ${navegationLi}` : `${navegationLi}`}>
                    <Link href="/home">
                        <a>
                            <span className="navegationIcon"><i className="uil uil-estate"></i></span>
                        </a>
                    </Link>
                </li>
                <li onClick={() => ActiveIcons("iconWallet")} className={iconWallet ? `active wallet text-gray-100 ${navegationLi}` : `${navegationLi}`}>
                    <Link href="/wallet">
                        <a href="#">
                            <span className="navegationIcon"><i className="uil uil-wallet"></i></span>
                        </a>
                    </Link>
                </li>
                <li onClick={() => ActiveIcons("iconMoney")} className={iconMoney ? `active money text-gray-100 ${navegationLi}` : `${navegationLi}`}>
                    <Link href="/">
                        <a>
                            <span className="navegationIcon"><i className="uil uil-money-insert"></i></span>
                        </a>
                    </Link>
                </li>
                <li onClick={() => ActiveIcons("iconChart")} className={iconChart ? `active chart text-gray-100 ${navegationLi}` : `${navegationLi}`}>
                    <Link href="/chart">
                        <a>
                            <span className="navegationIcon"><i className="uil uil-chart-pie"></i></span>
                        </a>
                    </Link>
                </li>
                <li onClick={() => ActiveIcons("iconConfig")} className={iconConfig ? `active config text-gray-100 ${navegationLi}` : `${navegationLi}´`}>
                    <Link href="/settings">
                        <a>
                            <span className="navegationIcon"><i className="uil uil-cog"></i></span>
                        </a>
                    </Link>
                </li>
                <div className="navegationIndicator"></div>
            </ul>
        </div>
    );
}