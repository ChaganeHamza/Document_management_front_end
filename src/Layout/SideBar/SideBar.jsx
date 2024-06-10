import React, {useState} from "react";
import SideBarItem from "../Components/SideBarItem";
import { IconDashboard, IconShoppingCartCheck, IconShoppingCartExclamation, IconTruckDelivery, IconShoppingCart, IconArchive, IconLogout, IconClipboard, IconSettings, IconBell, } from '@tabler/icons-react';
import logo from "./logopng.png";
import { useNavigate, useLocation } from 'react-router-dom';




const SideBar = () => {
    const [simpleStyle, setSimpleStyle] = useState(
        " my-6 ml-6 text-gray-500 hover:text-pc duration-300 text-base flex items-center "
    );
    const [selectStyle, setSelectStyle] = useState(
        " my-6 ml-4 py-2 px-3 rounded w-48 text-white bg-pc duration-300 text-base flex items-center"
    );

    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation hook to get the current location



    return (
        <div className="bg-white border-r-[1.5px] border-r-gray-200 rounded-40 p-2 shadow-csh w-64 h-[calc(100vh)] fixed top-0 left-0 flex flex-col justify-between">
            <div>
                <div className="my-1 px-6 py-4 h-min flex justify-center items-center">
                    <img className="" src={logo} alt=""/>
                </div>
                <SideBarItem
                    icon={<IconDashboard stroke={1.5}/>}
                    text="Dashboard"
                    href={'/'}
                />
                <SideBarItem
                    icon={<IconClipboard stroke={1.5}/>}
                    text="Documents"
                    href={'/document'}
                />
                <SideBarItem
                    icon={<IconShoppingCartCheck stroke={1.5}/>}
                    text="Commandes de vente"
                    href={'/salesorders'}
                />
                <SideBarItem
                    icon={<IconShoppingCart stroke={1.5}/>}
                    text="Commandes d'achat"
                    href={'/purchaseorders'}
                />
                <SideBarItem
                    icon={<IconShoppingCartExclamation stroke={1.5}/>}
                    text="Retours de vente"
                    href={'/salesreturns'}
                />
                <SideBarItem
                    icon={<IconTruckDelivery stroke={1.5}/>}
                    text="Livraisons"
                    href={'/deliveries'}
                />
                <SideBarItem
                    icon={<IconArchive stroke={1.5}/>}
                    text="Archive"
                    href={'/archive'}
                />
                <SideBarItem
                    icon={<IconBell stroke={1.5}/>}
                    text="Notifications"
                    href={'/alerts'}
                />
                <SideBarItem
                    icon={<IconSettings stroke={1.5}/>}
                    text="Paramétres"
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

