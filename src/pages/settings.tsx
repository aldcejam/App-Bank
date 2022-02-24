import { NextPage } from "next";
import { CardSettings } from "../components/cards";
import { UseAndModifierInformations } from "../contexts/headerContext";
import {
    IoAlertSharp,
    IoLockClosedSharp,
    IoShieldSharp,
    IoMail,
    IoCall,
    IoNotificationsSharp,
    IoHelpSharp,
    IoCashOutline,
    IoLanguageSharp,
    IoPersonSharp
    
} from "react-icons/io5" 


const Config: NextPage = () => {
    /* Header */
    const { modifierDetails } = UseAndModifierInformations();
    const { modifierMainInformation } = UseAndModifierInformations();

    modifierDetails("")
    modifierMainInformation("Settings")

    return (
        <div className="w-full grid grid-cols-2 absolute gap-6 p-5 py-8  ">
            <CardSettings icon={<IoAlertSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'on'} />
            <CardSettings icon={<IoLockClosedSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoMail className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoCall className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoNotificationsSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoPersonSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoShieldSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoCashOutline className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoHelpSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
            <CardSettings icon={<IoLanguageSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'oa'} />
        </div>
    )
}

export default Config;
