import React from "react";
import { IconShoppingBagPlus, IconUpload, IconDownload, IconClipboardPlus, IconUserPlus } from '@tabler/icons-react';
import DashbordSideItem from "../Layout/Components/DashbordSideItem";
import ApexChart from '../Layout/Components/ApexChart';
import DonutChart from "../Layout/Components/DonutChart";
import Header from "../Layout/Header/Header";
import SideBar from "../Layout/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="ml-64 pt-14 space-y-4">
        <div className="grid grid-cols-5 h-screen">
          <div className="flex flex-col gap-4 col-span-4 p-6">
            <div className="bg-white rounded-xl p-2 border">
              <ApexChart />
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-white rounded-xl w-1/2 h-min p-4 border">
                <span className="text-txtstl text-sm pl-6 font-semibold">Commandes de vente categorie</span>
                <DonutChart />
              </div>
            </div>
          </div>
          <div className=" col-span-1  bg-[#f5f7f7] border-l-[1.5px] border-l-gray-200">
            <div className="flex flex-col gap-6 py-6 px-4">
              <DashbordSideItem href={'#'} text={'Ajouter Document'} icon={<IconClipboardPlus stroke={1.5} />} shortcut={'⌘P'} />
              <DashbordSideItem href={'#'} text={'Export Document'} icon={<IconDownload stroke={1.5} />} shortcut={'⌘E'} />
              <DashbordSideItem href={'#'} text={'Import Document'} icon={<IconUpload stroke={1.5} />} shortcut={'⌘L'} />
              <DashbordSideItem href={'#'} text={'Ajouter Commande'} icon={<IconShoppingBagPlus stroke={1.5} />} shortcut={'⌘O'} />
              <DashbordSideItem href={'#'} text={'Ajoutet Client'} icon={<IconUserPlus stroke={1.5} />} shortcut={'⌘V'} />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
