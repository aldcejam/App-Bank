import { UseAndModifierInformations } from "../contexts/headerContext";
import { Person } from "./person";



export function Header() {

    const {details, mainInformation} = UseAndModifierInformations();

    return details ? (
        <header className="z-50 bg-primary py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                <span className="text-gray-500 text-xs mx-2">
                    {details}
                </span><br />
                <span className="font-bold text-2xl">
                    {mainInformation}
                </span>
            </div>
            <Person online={true} image={"https://github.com/aldcejam.png"} width="w-8" height="h-8" />

        </header>
    ) : (
        <header className="z-50 bg-primary  py-8 px-3 flex justify-between items-center fixed w-full max-w-md top-0">
            <div>
                <span className="font-bold text-2xl">
                    {mainInformation}
                </span>
            </div>
            <Person online={true} image={"https://github.com/aldcejam.png"} width="w-8" height="h-8" />

        </header>
    )
}