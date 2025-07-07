import babyImg from "../assets/baby-img.svg";
import Breastfeeding from "../assets/Breastfeeding-img.png";
import Sleeping from "../assets/Sleeping-img.png";
import Growth from "../assets/Growth-img.png";
import feeding from "../assets/feeding-img.png";
import Diaper from "../assets/Diaper-img.png";
import Vaccinations from "../assets/Vaccinations-img.png";
import { Link } from "react-router-dom";

const informations = [
  {
    title: "Breastfeeding",
    img: Breastfeeding,
    path: "/breastfeeding",
  },
  {
    title: "Sleeping",
    img: Sleeping,
    path: "/sleeping",
  },
  {
    title: "Growth",
    img: Growth,
    path: "/growth",
  },
  {
    title: "Feeding",
    img: feeding,
    path: "/feeding",
  },

  {
    img: Diaper,
    title: "Diaper",
    path: "/diaper",
  },
  {
    img: Vaccinations,
    title: "Vaccinations",
    path: "/vaccinations",
  },
];

const Information = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#78B3CE] to-[#C9E6F0] md:h-[calc(100vh-70px)] h-[300px] flex flex-col items-center justify-center">
        <img src={babyImg} alt="baby" className="" />
      </div>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {informations.map((info, index) => (
          <Link
            to={info.path}
            key={index}
            className="relative flex flex-col items-center"
          >
            <img
              src={info.img}
              alt={info.title}
              className="w-full rounded-[56px] max-w-[400px]"
            />
            <h2 className="text-black text-2xl text-center font-bold">
              {info.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Information;
