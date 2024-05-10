import SideBar from "@/components/SideBar";
import TweetCard from "@/components/TweetCard";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-1 px-4">
        <SideBar />
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-600">
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
    </div>
  );
}
