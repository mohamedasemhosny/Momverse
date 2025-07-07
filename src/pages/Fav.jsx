import ServiceCard from "@/components/common/ServiceCard";
import info from "@/assets/info.png";
import pregnancy from "@/assets/pregnancy.png";
import activate from "@/assets/activate.png";

const services = [
  {
    img: info,
    title: "Information",
  },
  {
    img: pregnancy,
    title: "Pregnancy",
  },
  {
    img: activate,
    title: "Activate",
  },
];

const Fav = () => {
  return (
    <div className="container mx-auto px-3 mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {services.map((service, i) => (
        <ServiceCard key={i} service={service} fav={true} />
      ))}
    </div>
  );
};

export default Fav;
