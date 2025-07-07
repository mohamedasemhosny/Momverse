import SectionHeading from "@/components/common/SectionHeading";
import mentalBaneer from "../assets/mental.png";
import SectionAccordion from "@/components/layout/SectionAccordion";
import { accordionItems } from "@/constant";

const MentalHealth = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={mentalBaneer}
        alt="sleeping"
        className="w-full md:h-[calc(100vh-70px)] h-[300px] object-cover"
      />

      <SectionHeading
        className={"text-black"}
        title="The psychological health of the mother affects the future of the child"
        description="growth and development The experience of pregnancy is a beautiful journey, and its impact can completely change your life. It can also lead to many changes and challenges in a woman’s life. Whether you are pregnant for the first time or have previous experiences, it is important to obtain the necessary support and information to have a healthy and happy pregnancy experience. sleep aids in the secretion of growth hormones. mood regulation quality sleep contributes to mood stability.  immune support good sleep strengthens the immune system, helping protect the baby from illnesses. infants typically sleep between 14 to 17 hours a day, but this can vary with age."
      />

      <SectionAccordion
        title="The psychological health of the mother affects the future of the child"
        description="The experience of pregnancy is a beautiful journey, and its impact can completely change your life. It can also lead to many changes and challenges in a woman’s life. Whether you are pregnant for the first time or have previous experiences, it is important to obtain the necessary support and information to have a healthy and happy pregnancy experience."
        items={accordionItems}
      />
    </div>
  );
};

export default MentalHealth;
