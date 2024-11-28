import Image from "next/image";
import React from "react";

const FeedCard : React.FC = () =>{
    return <div className="border border-gray-600 p-4">
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <Image src={"https://avatars.githubusercontent.com/u/103727502?v=4"} alt="Avatar" height={50} width={50} className="rounded-full" />
            </div>
            <div className="col-span-11">
                <h5>Tejas Shinde</h5>
            </div>
        </div>
    </div>
}

export default FeedCard;