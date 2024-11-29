import FeedCard from "@/components/FeedCard";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

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
    title: "Twitter Blur",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Option",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen pl-56 ">
        <div className="col-span-3  w-3/5 pt-4 ml-28">
          <div className="text-3xl p-2 h-fit w-fit rounded-full hover:bg-gray-800 cursor-pointer transition-all">
            <FaTwitter />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start px-2 items-center gap-4 hover:bg-gray-800 rounded-full w-fit py-2 mt-2 cursor-pointer"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] font-semibold p-3 w-full text-xl rounded-full">
              Tweet
            </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 h-screen overflow-y-auto w-4/5 border-r-[1px] border-l-[1px] border border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 "></div>
      </div>
    </div>
  );
}
