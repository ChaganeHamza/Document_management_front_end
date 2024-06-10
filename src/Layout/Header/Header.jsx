import React, { useState, useEffect } from "react";
import {IconBell} from '@tabler/icons-react';



function Header() {
    
    return(
        <div className="pl-[268px] p-3 flex flex-row  justify-between border-b-[1.5px] border-b-gray-200 w-full bg-white text-black fixed top-0">
            <div className={'text-xl font-medium text-gray-700'}>
                Seidor Application
            </div>
            <div className={"flex flex-row gap-4"}>
                <div>
                    <IconBell color={'red'} />
                </div>
            </div>

        </div>
    )
}

export default Header;
