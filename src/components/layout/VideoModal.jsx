const VideoModal = ({ videoUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-[1000px] p-4 rounded relative">
        <button
          className="cursor-pointer absolute top-2 right-4 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe
          src={videoUrl}
          title="video"
          className="w-full h-[500px] rounded"
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default VideoModal;