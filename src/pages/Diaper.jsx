import { diaperVideos } from "@/constant";
import giaperImg from "../assets/diaper-img.svg";
import VideosList from "@/components/layout/VideosList";
import Button from "@/components/common/Button";

const Diaper = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center  md:h-[calc(100vh-70px)] h-[300px]">
        <img src={giaperImg} alt="diaper" className="object-cover" />
      </div>
      <VideosList videos={diaperVideos} description={"diapering your baby:"} />
      <div className="flex justify-center items-center">
        <Button name={"More"} className="my-10 px-20" />
      </div>
    </div>
  );
};

export default Diaper;
