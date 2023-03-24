export const VideoSection = () => {
  return (
    <div className="tm-bg-video">
      <div className="overlay">
        <i className="fa fa-5x fa-play-circle tm-btn-play"></i>
        <i className="fa fa-5x fa-pause-circle tm-btn-pause"></i>
      </div>
      <video controls loop className="tmVideo">
        <source src="videos/video.mp4" type="video/mp4" />
        <source src="videos/video.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
