import { TiHeartOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, fav }) => {
  return (
    <Link
      to={service.path}
      className="bg-[#D9D9D9] p-1 h-auto w-[130px] flex flex-col items-center justify-center rounded-lg shadow-lg"
    >
      <div className="relative">
        <img
          src={service.img}
          alt="service image"
          className="-translate-y-[30px]"
        />
        {fav && <TiHeartOutline className="text-bg text-xl absolute right-0" />}
      </div>

      <h3 className="text-center text-black font-semibold">{service.title}</h3>
    </Link>
  );
};

export default ServiceCard;
