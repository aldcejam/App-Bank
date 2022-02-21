import { Person } from "./person";

interface HeaderProps {
    details?: string;
    mainInformation: string;
}

export function Header({ mainInformation, details }: HeaderProps) {


    return details ? (
        <header className="bg-primary py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                <span className="text-gray-500 text-xs mx-2">
                    {details}
                </span><br />
                <span className="font-bold text-2xl">
                    {mainInformation}
                </span>
            </div>
            <Person online={"online"} image={"https://github.com/aldcejam.png"} />

        </header>
    ) : (
        <header className="bg-primary  py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                <span className="font-bold text-2xl">
                    {mainInformation}
                </span>
            </div>
            <Person online={"online"} image={"https://github.com/aldcejam.png"} />

        </header>
    )
}