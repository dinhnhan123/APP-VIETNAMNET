import { Link } from "react-router-dom";

const LawThreeGrid = () => {
  return (
    <div className="row g-3 law-three-grid">
      <div className="col-12 col-md-4">
        <Link to="/phap-luat/xet-xu-vu-an" className="grid-item">
          <img
            src="https://nguoiduatin.mediacdn.vn/84137818385850368/2026/1/9/img5352-17679509640601412401254.jpeg"
            alt=""
          />
          <h6>
            Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/phap-luat/cong-an-dieu-tra" className="grid-item">
          <img
            src="https://dms.gov.vn/documents/53553/0/z5936937427743_3b3e46079536c9558359f5cce86e5f43.jpg/c4c7e816-17dd-421a-bbf2-340dbe0882d4"
            alt=""
          />
          <h6>
            Công an mở rộng điều tra vụ việc có dấu hiệu vi phạm hình sự
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/phap-luat/luat-moi-co-hieu-luc" className="grid-item">
          <img
            src="https://cdn.thuvienphapluat.vn/uploads/tintuc/2024/11/16/08-luat-co-hieu-luc.png"
            alt=""
          />
          <h6>
            Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default LawThreeGrid;
