import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Chart: NextPage = () => {
    /* Header */
    const {modifierDetails} = UseAndModifierInformations();
    const {modifierMainInformation} = UseAndModifierInformations();
    
    modifierDetails("")
    modifierMainInformation("historic")

    return(
        <></>
    )
}

export default Chart;
