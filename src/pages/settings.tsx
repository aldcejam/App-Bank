import { NextPage } from "next";
import { SettingCard } from "../components/Cards/SettingCard/SettingCard";
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
import { Header } from "../components/Header/Header";


const Config: NextPage = () => {
    /* Header */

    return (<>
    <Header title='Settings' />
        <div className="w-full grid grid-cols-2  gap-6 p-5 py-8 pb-24">
            <SettingCard icon={<IoAlertSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Profile Information'} />
            <SettingCard icon={<IoLockClosedSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Passworld'} />
            <SettingCard icon={<IoMail className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Email'} />
            <SettingCard icon={<IoCall className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Phone Number'} />
            <SettingCard icon={<IoNotificationsSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Notification'} />
            <SettingCard icon={<IoCashOutline className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Currency'} />
            <SettingCard icon={<IoLanguageSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Language'} />
            <SettingCard icon={<IoPersonSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Account'} />
            <SettingCard icon={<IoShieldSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Privacy Policy'} />
            <SettingCard icon={<IoHelpSharp className="text-primary text-2xl box-content p-4 sm:p-3 sm:text-base " />} settingName={'Terms of Use'} />
        </div>
    </>
    )
}

export default Config;
