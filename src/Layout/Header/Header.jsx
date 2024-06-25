import React, { useState, useEffect } from "react";
import { IconBell, IconUserCircle } from '@tabler/icons-react';

function Header() {

    return(
        <div className="pl-[268px] z-20 p-3 flex flex-row justify-between items-center border-b-[1.5px] border-b-gray-200 w-full bg-white text-black fixed top-0">
            <div className={'text-2xl font-bold text-black'}>
                Chicago Warehouse
            </div>
            <div className={"flex flex-row items-center gap-6"}>
                <div className="text-pc">
                    <IconBell size={'28px'} />
                </div>
                <div className="text-gray-600 flex items-center">
                    <IconUserCircle size={'34px'} />
                    <span className="ml-2"></span> {/* Render username */}
                </div>
            </div>
        </div>
    )
}

export default Header;