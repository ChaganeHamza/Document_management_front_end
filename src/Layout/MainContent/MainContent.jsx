import {IconPlus} from '@tabler/icons-react';
import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const MainContent = (props) =>{
    return(
        <><div>
        <Header />
    </div>
    <SideBar />
        <div className={'ml-64 py-6 px-6 mt-12 flex flex-col gap-4'}>
            <div className={'flex flex-row items-center justify-between'}>
                <span className={'text-3xl font-semibold text-[#121212]'}>
                {props.Title}
                </span>
                {props.Action ? (
                    <a
                        href={props.ActionLink} // Use actionlink here
                        className="flex flex-row gap-2 rounded-[6px] bg-[#4a90e2] w-max h-max py-3 px-4 text-white font-normal hover:bg-pch"
                    >
                        <IconPlus />
                        <span>Ajouter Document</span>
                    </a>
                ) : null}
            </div>
            <div className={'bg-white rounded-xl p-4 border-[1.5px] border-gray-200'}>
                <div>
                    {props.Content}
                </div>
            </div>

        </div>
        </>
    )
}

export default MainContent;