import React from "react";
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiHtml5Line className="text-7xl" />
        </div>
        <div className="p-4">
          <RiCss3Line className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
         <RiJavascriptLine className="text-7xl"/>
        </div>
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
