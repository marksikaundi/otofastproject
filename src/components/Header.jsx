import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { SiTorproject } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { MdStream } from "react-icons/md";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="PROJECTS" address="/projects" Icon={SiTorproject} />
        <MenuItem title="CODES" address="/codes" Icon={BsCodeSlash} />
        <MenuItem title="STREAM" address="/stream" Icon={MdStream} />
        
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-green-600 py-1 px-2 rounded-lg mr-1">fast</span>
            <span className="text-xl hidden sm:inline">Pro</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
