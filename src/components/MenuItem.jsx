import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link className="mx-4 lg:mx-6 hover:text-green-600" href={address}>
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:iniline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
