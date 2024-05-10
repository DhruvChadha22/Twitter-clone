import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

export default function() {
    return <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/153297759?v=4" alt="user-img" height={50} width={50} className="rounded-full"/>
            </div>
            <div className="col-span-11">
                <h5>Dhruv Chadha</h5>
                <p>Contents of the tweet. I am Dhruv Chadha learning to build stuff.</p>
                <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                    <div>
                        <BiMessageRounded />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <BiUpload />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
