import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 border-r-0 border-l-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/103727502?v=4"}
            alt="Avatar"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Tejas Shinde</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequatur ipsam hic tenetur eum. Nostrum dolorem sint quis in
            architecto? Voluptatibus impedit labore magni vero ducimus iusto
            odit, suscipit eos aliquam nemo, nulla ipsa laboriosam.
          </p>
          <div className="flex justify-between items-center mt-5 text-xl px-2 pr-6 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
                <FaRetweet/>
            </div>
            <div>
                <AiOutlineHeart/>
            </div>
            <div>
                <BiUpload/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
