import VideosList from "@/components/layout/VideosList";
import sleepingBanner from "../assets/SleepingBanner-img.png";
import Button from "@/components/common/Button";
import { sleepingVideos } from "@/constant";
import SectionHeading from "@/components/common/SectionHeading";

const Sleeping = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={sleepingBanner}
        alt="sleeping"
        className="w-full md:h-[calc(100vh-70px)] h-[300px] object-cover"
      />

      <SectionHeading
        title="importance of sleep for infants:"
        description="growth and development deep sleep aids in the secretion of growth hormones. mood regulation quality sleep contributes to mood stability.  immune support good sleep strengthens the immune system, helping protect the baby from illnesses. infants typically sleep between 14 to 17 hours a day, but this can vary with age."
      />

      <VideosList videos={sleepingVideos} />
      <div className="flex justify-center items-center">
        <Button name={"More"} className="my-10 px-20" />
      </div>
    </div>
  );
};

export default Sleeping;
