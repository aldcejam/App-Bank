import { NextPage } from "next";
import { CardSettings } from "../components/cards";
import {UseAndModifierInformationsHeader } from "../contexts/headerContext";
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
    const { modifierDetails,modifierHeaderTitle } = UseAndModifierInformationsHeader();

    modifierDetails("")
    modifierHeaderTitle("Settings")

    return (
        <div className="w-full grid grid-cols-2  gap-6 p-5 py-8 pb-24">
            <CardSettings icon={<IoAlertSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Profile Information'} />
            <CardSettings icon={<IoLockClosedSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Passworld'} />
            <CardSettings icon={<IoMail className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Email'} />
            <CardSettings icon={<IoCall className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Phone Number'} />
            <CardSettings icon={<IoNotificationsSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Notification'} />
            <CardSettings icon={<IoCashOutline className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Currency'} />
            <CardSettings icon={<IoLanguageSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Language'} />
            <CardSettings icon={<IoPersonSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Account'} />
            <CardSettings icon={<IoShieldSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Privacy Policy'} />
            <CardSettings icon={<IoHelpSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Terms of Use'} />
        </div>
    )
}

export default Config;
