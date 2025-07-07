import videoIcon from "../../assets/vedioIcon.png";

const VideoCard = ({ video, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-lg border border-secondary shadow-lg p-2 flex items-center justify-between gap-5 cursor-pointer hover:bg-gray-100 transition"
    >
      <div className="flex items-center gap-3">
        <img src={videoIcon} alt="video" />
        <h2 className="font-bold">{video.title}</h2>
      </div>
      <span className="text-lg">{video.time}</span>
    </div>
  );
};

export default VideoCard;
