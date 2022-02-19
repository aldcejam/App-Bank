

export function Footer() {

    
    const [list] =  document.querySelectorAll('.navegationLi')
    
    const activeLink = () => {
        list.forEach((item) => {
            item.classList.remove('active')
        })
    }
    list.forEach((item)=>{
        item.addEventListener('click', activeLink)
    })

    return (
        <div className="bg-secondary w-full max-w-md h-20 flex items-center bottom-0 fixed pt-6">
            <ul className="text-3xl text-gray-600 flex w-full text-center justify-center">
                <li className="navegationLi ">
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-estate"></i></span>
                    </a>
                </li>
                <li className="navegationLi">
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-wallet"></i></span>
                    </a>
                </li>
                <li className="navegationLi active">
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-money-insert"></i></span>
                    </a>
                </li>
                <li className="navegationLi">
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-chart-pie"></i></span>
                    </a>
                </li>
                <li className="navegationLi">
                    <a href="#">
                        <span className="navegationIcon"><i className="uil uil-cog"></i></span>
                    </a>
                </li>
                <div className="navegationIndicator"></div>
            </ul>
        </div>
    );
}