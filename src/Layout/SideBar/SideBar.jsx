import React from "react";
import SideBarItem from "../Components/SideBarItem";
import { IconDashboard, IconArchive, IconLogout, IconClipboard, IconSettings, IconBell, } from '@tabler/icons-react';
import logo from "./logopng.png";

const SideBar = () => {
    return (
        <div className="bg-white border-r-[1.5px] border-r-gray-200 rounded-40 p-2 shadow-csh w-64 h-[calc(100vh)] fixed top-0 left-0 flex flex-col justify-between">
            <div>
                <div className="my-1 px-6 py-4 h-min flex justify-center items-center">
                    <img className="" src={logo} alt=""/>
                </div>
                <SideBarItem
                    icon={<IconDashboard stroke={1.5}/>}
                    text="Dashboard"
                    href={'/dashboard'}
                />
                <SideBarItem
                    icon={<IconClipboard stroke={1.5}/>}
                    text="Document"
                    href={'/document'}
                />
                <SideBarItem
                    icon={<IconArchive stroke={1.5}/>}
                    text="Archive"
                    href={'/archive'}
                />
                <SideBarItem
                    icon={<IconBell stroke={1.5}/>}
                    text="Alerts"
                    href={'/alerts'}
                />
                <SideBarItem
                    icon={<IconSettings stroke={1.5}/>}
                    text="Settings"
                    href={'/settings'}
                />
            </div>
            <div>
                <SideBarItem
                    className={'-bottom-0'}
                    icon={<IconLogout stroke={1.5}/>}
                    text="Logout"
                    href={'/login'}
                />
            </div>
        </div>
    )
}

export default SideBar;
