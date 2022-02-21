import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Wallet: NextPage = () => {
    /* Header */
    const {modifierDetails} = UseAndModifierInformations();
    const {modifierMainInformation} = UseAndModifierInformations();
    
    modifierDetails("")
    modifierMainInformation("Manage Money")

    return(
        <></>
    )
}

export default Wallet;
