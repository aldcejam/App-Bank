import { NextPage } from "next";
import { CardSetting } from "../components/Cards/CardSetting";
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
    

    return (
        <div className="w-full grid grid-cols-2  gap-6 p-5 py-8 pb-24">
            <CardSetting icon={<IoAlertSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Profile Information'} />
            <CardSetting icon={<IoLockClosedSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Passworld'} />
            <CardSetting icon={<IoMail className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Email'} />
            <CardSetting icon={<IoCall className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Phone Number'} />
            <CardSetting icon={<IoNotificationsSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Notification'} />
            <CardSetting icon={<IoCashOutline className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Currency'} />
            <CardSetting icon={<IoLanguageSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Language'} />
            <CardSetting icon={<IoPersonSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Account'} />
            <CardSetting icon={<IoShieldSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Privacy Policy'} />
            <CardSetting icon={<IoHelpSharp className="text-secondary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Terms of Use'} />
        </div>
    )
}

export default Config;
