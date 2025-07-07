import Button from "@/components/common/Button";
import VideosList from "@/components/layout/VideosList";
import vassinImg from "../assets/vaccin-img.png";
import { vaccinationVideos } from "@/constant";

const Vaccinations = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={vassinImg}
        alt="sleeping"
        className="w-full md:h-[calc(100vh-70px)] h-[300px] object-cover"
      />

      <VideosList videos={vaccinationVideos} />
      <div className="flex justify-center items-center">
        <Button name={"More"} className="my-10 px-20" />
      </div>
    </div>
  );
};

export default Vaccinations;
