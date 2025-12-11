import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/home/videoSection.css";

const VideoSection = ({ mainVideo, sideVideos }) => {
  const videoRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const vid = entry.target;
          if (entry.isIntersecting) vid.play();
          else vid.pause();
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach(v => v && observer.observe(v));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="fw-bold mb-3">VIDEO</h5>

      <div className="row g-4">
        <div className="col-12 col-lg-7">

          <Link to={mainVideo.link} className="text-decoration-none text-dark">
            <div className="video-wrapper">
              <video
                ref={el => (videoRefs.current[0] = el)}
                src={mainVideo.video}
                muted
                loop
                className="w-100 rounded"
              />

              <div className="video-caption p-3 text-white">
                {mainVideo.subtitle}
              </div>
            </div>

            <h5 className="mt-2 fw-bold">{mainVideo.title}</h5>
          </Link>

        </div>

        <div className="col-12 col-lg-5">
          <div className="row g-3">

            {sideVideos.map((v, i) => (
              <div key={i} className="col-6">

                <Link to={v.link} className="text-decoration-none text-dark">
                  <div className="small-video position-relative">
                    <video
                      ref={el => (videoRefs.current[i + 1] = el)}
                      src={v.video}
                      muted
                      loop
                      className="w-100 rounded"
                    />
                    <span className="play-icon">▶</span>
                  </div>

                  <p className="mt-1 small fw-semibold">{v.title}</p>
                </Link>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoSection;
