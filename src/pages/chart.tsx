import { NextPage } from "next";
import { UseAndModifierInformations } from "../contexts/headerContext";

const Chart: NextPage = () => {
    /* Header */
    const {modifierDetails,modifierHeaderTitle } = UseAndModifierInformations();

    
    modifierDetails("")
    modifierHeaderTitle("historic")

    return(
        <></>
    )
}

export default Chart;
