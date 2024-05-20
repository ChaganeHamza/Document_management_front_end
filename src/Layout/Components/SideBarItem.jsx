import React from "react";

const SideBarItem = (props) => {
    return (
        <a href={props.href}>
        <div className={props.className + ' my-6 ml-6 text-gray-500 hover:text-pc duration-500 text-base flex items-center'}>
            <div className=' mr-3'>
                {props.icon}
            </div>
            <div className='font-medium'>
                {props.text}
            </div>
        </div>
        </a>
    )
}

export default SideBarItem;