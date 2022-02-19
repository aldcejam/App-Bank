interface HeaderProps {
    details?: string;
    mainInformation: string | number;
}

export function Header({ mainInformation, details }: HeaderProps) {


    return details ? (
        <header className="mx-3 py-5 flex justify-between items-center ">
            <div>
                <span className="text-gray-500 text-xs mx-2">
                    {details}
                </span><br />
                <span className="font-bold text-2xl">
                   $ {mainInformation}
                </span>
            </div>
            <div className="w-8 h-8 rounded-full relative border-green-weak-cp border-2 box-content ">
                <img className="rounded-full absolute" src="https://github.com/aldcejam.png" alt="" />
                <div className="absolute bg-green-cp w-3 h-3 right-0 rounded-full border-2 border-red-100 border-primary" />
            </div>
        </header>
    ) : (
        <header className="mx-3 pt-5 flex justify-between items-center">
            <div>
                <span className="font-bold text-2xl">
                    {mainInformation}
                </span>
            </div>
            <div className="w-8 h-8 rounded-full relative border-green-weak-cp border-2 box-content ">
                <img className="rounded-full absolute" src="https://github.com/aldcejam.png" alt="" />
                <div className="absolute bg-green-cp w-3 h-3 right-0 rounded-full border-2 border-red-100 border-primary" />
            </div>
        </header>
    )
}