import { NextPage } from "next";
import { UseAndModifierInformationsHeader } from "../contexts/headerContext";

const Wallet: NextPage = () => {
    /* Header */
    const {modifierDetails, modifierHeaderTitle} = UseAndModifierInformationsHeader();
    
    modifierDetails("")
    modifierHeaderTitle("Manage Money")

    return(
        <></>
    )
}

export default Wallet;
