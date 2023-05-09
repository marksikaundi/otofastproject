import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { SiTorproject } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { MdStream } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem
          title="FEATURES"
          address="/features"
          Icon={BsFillCollectionFill}
        />
        <MenuItem title="PROJECTS" address="/projects" Icon={SiTorproject} />
        <MenuItem title="CODES" address="/codes" Icon={BsCodeSlash} />
        <MenuItem title="STREAM" address="/stream" Icon={MdStream} />
        <MenuItem
          title="ABOUT US"
          address="/about"
          Icon={BsFillInfoSquareFill}
        />
      </div>
      <div className="">
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
