import { suggestions } from "@/constant";
import community_1 from "../assets/community_1.svg";
import community_2 from "../assets/community_2.svg";
import Button from "@/components/common/Button";

const Community = () => {
  return (
    <div className="bg-white">
      <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-[#C9B2A2] rounded-b-[40px]">
        <div className="container mx-auto px-3">
          <h1 className="text-3xl font-bold mb-10 md:mb-0">community</h1>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-2xl font-bold">Welcome To Community</h2>
              <p className="text-lg max-w-2xl">
                Make Freinds,Share Your Experience and get support in the Mama
                Mentor Community
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="bg-[#78B3CE] rounded-3xl flex flex-col justify-between size-60">
                <h2 className="text-2xl font-bold p-5 overflow-hidden">
                  My Freinds
                </h2>
                <img src={community_1} alt="" className="w-full self-end" />
              </div>
              <div className="bg-[#78B3CE] rounded-3xl flex flex-col justify-between size-60">
                <h2 className="text-2xl font-bold p-5 overflow-hidden">
                  My Groups
                </h2>
                <img src={community_2} alt="" className="w-full self-end" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 text-black">
        <h1 className="text-3xl font-bold text-center my-20">
          Suggested Topics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={suggestion.img}
                alt={suggestion.title}
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{suggestion.title}</h2>
                <p className="text-sm">{suggestion.description}</p>
              </div>

              <Button name="Join" className="ml-auto px-7 rounded-3xl" />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button name={"View All"} className="my-20 px-20" />
        </div>
      </div>
    </div>
  );
};

export default Community;
