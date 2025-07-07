import VideoCard from "../common/VideoCard";

const VideosList = ({ description, videos, onVideoClick }) => {
  return (
    <div className="container mx-auto px-3 my-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-5">video tips</h1>
        {description && <p className="text-xl">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-5">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            onClick={() => onVideoClick(video.video_url)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosList;