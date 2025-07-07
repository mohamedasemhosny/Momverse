import VideosList from "@/components/layout/VideosList";
import growthImg from "../assets/growth-img.svg";
import Button from "@/components/common/Button";
import { growthVideos } from "@/constant";

const Growth = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center  md:h-[calc(100vh-70px)] h-[300px]">
        <img src={growthImg} alt="Growth" className="object-cover" />
      </div>
      <VideosList
        videos={growthVideos}
        description={"stages of child growth:"}
      />
      <div className="flex justify-center items-center">
        <Button name={"More"} className="my-10 px-20" />
      </div>
    </div>
  );
};

export default Growth;
