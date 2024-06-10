import React from "react";

const DashbordSideItem = (props) => {
  return (
    <a href={props.href}>
      <div className="text-txtstl hover:text-pc duration-300 text-base flex justify-between items-center flex-row curso">
        <div className="flex flex-row gap-3 items-center">
        {props.icon}
          <span className="font-medium">{props.text}</span>
        </div>
        <span className="text-gray-400">{props.shortcut}</span>
      </div>
    </a>
  );
};

export default DashbordSideItem;