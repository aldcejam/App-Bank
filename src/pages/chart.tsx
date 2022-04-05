import { NextPage } from "next";
import {UseAndModifierInformationsHeader } from "../contexts/headerContext";

const Chart: NextPage = () => {
    /* Header */
    const {modifierDetails,modifierHeaderTitle } = UseAndModifierInformationsHeader();

    
    modifierDetails("")
    modifierHeaderTitle("historic")

    return(
        <></>
    )
}

export default Chart;
