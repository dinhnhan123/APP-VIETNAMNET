import React from "react";
import "../../styles/home/aiContestBanner.css";
import imgRobot from "../../assets/robotai-removebg-preview.png";
const AiContestBanner = () => {
  return (
    <div className="ai-banner container mt-4 p-4 rounded-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-3 text-center">
          <img
            src={imgRobot}
            alt="robot"
            className="img-fluid robot-img"
          />
        </div>

        <div className="col-12 col-md-9 text-white">
          <h2 className="fw-bold text-center text-md-start ai-title">
            AI CONTEST 2025
          </h2>

          <div className="row mt-3 g-4">
            <div className="col-12 col-md-6 d-flex gap-3">
              <img
                src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/4/vietnam-ai-contest-2025-no-luc-dua-ai-tu-cong-nghe-thanh-gia-tri-nhan-van-1268.jpg?width=350&s=dWUVoEEqItxjWNHL4rECQA"
                className="thumb-img"
                alt="thumb"
              />
              <p className="m-0 small">
                Vietnam AI Contest 2025 nỗ lực đưa AI từ công nghệ thành giá trị nhân văn
              </p>
            </div>
            
            <div className="col-12 col-md-6 d-flex gap-3">
              <img
                src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/3/vietnam-ai-contest-2025-dieu-can-biet-ve-vong-chung-ket-thuyet-trinh-truc-tiep-635.jpg?width=350&s=ClbI3Gba1gnB-f_ASrHCzQ"
                className="thumb-img"
                alt="thumb"
              />
              <p className="m-0 small">
                Vietnam AI Contest 2025: Điều cần biết về Vòng Chung kết thuyết trình trực tiếp
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AiContestBanner;
