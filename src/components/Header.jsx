import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { SiTorproject } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs"
import { MdStream } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="">
      <div className="">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="FEATURES" address="/features" Icon={BsFillCollectionFill} />
        <MenuItem title="PROJECTS" address="/projects" Icon={SiTorproject} />
        <MenuItem title="CODES" address="/codes" Icon={BsCodeSlash} />
        <MenuItem title="STREAM" address="/stream" Icon={MdStream} />
        <MenuItem title="ABOUT US" address="/about" Icon={BsFillInfoSquareFill} />
        
      </div>
      <div className=""></div>
    </div>
  );
}
