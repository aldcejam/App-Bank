import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Config: NextPage = () => {
    /* Header */
    const {modifierDetails} = UseAndModifierInformations();
    const {modifierMainInformation} = UseAndModifierInformations();
    
    modifierDetails("")
    modifierMainInformation("Settings")

    return(
        <></>
    )
}

export default Config;
