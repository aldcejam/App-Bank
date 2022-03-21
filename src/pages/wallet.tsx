import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Wallet: NextPage = () => {
    /* Header */
    const {modifierDetails} = UseAndModifierInformations();
    const {modifierHeaderTitle} = UseAndModifierInformations();
    
    modifierDetails("")
    modifierHeaderTitle("Manage Money")

    return(
        <></>
    )
}

export default Wallet;
