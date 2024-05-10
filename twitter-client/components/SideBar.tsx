import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

interface SidebarButton {
    title: string;
    icon: React.ReactNode;
}

const sidebarItems: SidebarButton[] = [
    {
        title: "Home",
        icon: <BiHomeCircle />
    },
    {
        title: "Explore",
        icon: <BiHash />
    },
    {
        title: "Notifications",
        icon: <BsBell />
    },
    {
        title: "Messages",
        icon: <BsEnvelope />
    },
    {
        title: "Bookmarks",
        icon: <BsBookmark />
    },
    {
        title: "Profile",
        icon: <BiUser />
    },
    {
        title: "More",
        icon: <SlOptions />
    }
];

export default function() {
    return <div>
        <div className="text-2xl w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
        </div>
        <div className="mt-4 text-xl pr-4">
            <ul>
                {sidebarItems.map((item) => (
                    <li key={item.title} className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer transition-all mt-2">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <button className="bg-[#1d9bf0] mt-5 p-2 font-semibold text-lg rounded-full w-full">Tweet</button>
        </div>
    </div>
}
