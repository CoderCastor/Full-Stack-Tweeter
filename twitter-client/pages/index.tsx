import FeedCard from "@/components/FeedCard";
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen pl-56 ">
        <div className="col-span-3 p-8">
          <div className="text-4xl h-fit w-fit rounded-full p-4 hover:bg-gray-800 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-4 text-2xl pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full w-fit px-5 py-2 mt-2 cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] font-semibold p-4 w-full text-xl rounded-full">
              Tweet
            </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-400">
          <FeedCard/>
        </div>
        <div className="col-span-3 "></div>
      </div>
    </div>
  );
}
