const onPlay = (e) => {
  let vid = document.querySelector('.tmVideo');

  if (e.currentTarget.classList.contains('tm-btn-play')) {
    
    vid.play();
    e.currentTarget.setAttribute("style","content-visibility:hidden;");
    e.currentTarget.nextSibling.setAttribute("style","display: inline;");
  }
  else if(e.currentTarget.classList.contains('tm-btn-pause')){
    vid.pause();
    e.currentTarget.setAttribute("style","content-visibility:hidden;");
    e.currentTarget.previousSibling.setAttribute("style","display: inline;");
  }
};

export const VideoSection = () => {
  return (
    <div className="tm-bg-video">
      <div className="overlay">
        <i onClick={(e) => {onPlay(e)}} className="fa fa-5x fa-play-circle tm-btn-play"></i>
        <i onClick={(e) => {onPlay(e)}} className="fa fa-5x fa-pause-circle tm-btn-pause"></i>
      </div>
      <video controls loop className="tmVideo">
        <source src="videos/video.mp4" type="video/mp4" />
        <source src="videos/video.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
