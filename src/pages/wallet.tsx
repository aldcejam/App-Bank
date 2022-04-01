import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Wallet: NextPage = () => {
    /* Header */
    const {modifierDetails, modifierHeaderTitle} = UseAndModifierInformations();
    
    modifierDetails("")
    modifierHeaderTitle("Manage Money")

    return(
        <></>
    )
}

export default Wallet;
