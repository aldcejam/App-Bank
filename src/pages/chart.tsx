import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Chart: NextPage = () => {
    /* Header */
    const {modifierDetails} = UseAndModifierInformations();
    const {modifierHeaderTitle} = UseAndModifierInformations();
    
    modifierDetails("")
    modifierHeaderTitle("historic")

    return(
        <></>
    )
}

export default Chart;
